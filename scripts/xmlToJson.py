#!/usr/bin/env python

# L. Howard Copyright @2014
# Convert a CAD model (per the STEPtools defined XML spec)
# into a JSON spec model
# Derived from Javascript version at
# https://github.com/ghemingway/cad.js/blob/master/scripts/xmlToJson.js

import argparse
from datetime import datetime
import json
import math
from multiprocessing import cpu_count, Process, Queue
from operator import itemgetter
import os
from os.path import join
import re
import sys
import time
import xml.etree.cElementTree as ET

import logging
logging.basicConfig(
    format='%(asctime)s %(levelname)s:%(message)s', level=logging.DEBUG)
LOG = logging.getLogger(__name__)

# defaults and constants
DEFAULT_COLOR = "7d7d7d"
IDENTITY_TRANSFORM = "1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1"
SHELL_REGEX = re.compile("shell_(.*?).json")

#------------------------------------------------------------------------------

CONFIG = {
    'indexPoints': True,
    'indexNormals': True,
    'compressColors': True,
    'roundPrecision': 2
}


def round_float(val, precision):
    """floating point rounder"""
    if not precision:
        return val
    factor = math.pow(10, precision)
    return int(round(val * factor))


#------------------------------------------------------------------------------

def translate_index(doc):
    """Returns the full JSON"""
    return {
        'root': doc.attrib['root'],
        'products': [translate_product(x) for x in doc.iter('product')],
        'shapes': [translate_shape(x) for x in doc.iter('shape')],
        'shells': [translate_shell(x) for x in doc.iter('shell')],
        'annotations': [translate_annotation(x) for x in doc.iter('annotation')]
    }


def translate_product(product):
    """Translates a product"""
    data = {
        'id': product.attrib['id'],
        'step': product.attrib.get('step', ""),
        'name': product.attrib['name']
    }
    # Add children, if there are any
    if product.attrib.get('children'):
        data['children'] = product.attrib['children'].split(" ")
    # Add shapes, if there are any
    if product.attrib.get('shape'):
        data['shapes'] = product.attrib['shape'].split(" ")
    return data


def set_transform(transform):
    """Sets a transform"""
    return ("I" if transform == IDENTITY_TRANSFORM else
            [float(x) for x in transform.split(" ")])


def translate_shape(shape):
    """Translates a shape"""
    data = {
        'id': shape.attrib['id'],
        # "unit": shape.attrib['unit'],
    }
    data.update({x: [] for x in ('shells', 'annotations', 'children')})
    for child in shape.iter('child'):
        # Add children, if there are any
        data['children'].append({
            'ref': child.attrib['ref'],
            'xform': set_transform(child.attrib['xform'])
        })
    # Add child annotations
    if shape.attrib.get('annotation'):
        data['annotations'] = shape.attrib['annotation'].split(" ")
    # Terminal Shape JSON
    if shape.attrib.get('shell'):
        data['shells'] = shape.attrib['shell'].split(" ")
    return data


def translate_annotation(annotation):
    """Translates an annotation"""
    data = dict(id=annotation.attrib['id'])
    if 'href' in annotation.attrib:
        data['href'] = annotation.attrib['href'].replace("xml", "json")
    else:
        data['lines'] = []
        for polyline in annotation.iter('polyline'):
            points = []
            for p in polyline.iter('p'):
                points.extend([float(x) for x in p.attrib['l'].split(" ")])
            data['lines'].append(points)
    return data


#------------------------------------------------------------------------------

def make_index(data, ikey, ranger=None):
    """Create indexes, an abstraction of indexing functions in the original"""
    if ranger is None:
        ranger = xrange(len(data[ikey]))
    indexes = data[ikey + "Index"] = []
    values = data['values']
    for i in ranger:
        val = round_float(data[ikey][i], CONFIG['roundPrecision'])
        if val not in values:
            values[val] = len(values)
        indexes.append(values[val])
    del data[ikey]

# The following functions are named indexShellxxx in the original
# The renaming aligns them with settings in the indexing CONFIG
indexPoints = lambda d: make_index(d, 'points')
indexNormals = lambda d: make_index(d, 'normals')


def compress_shell_colors(data):
    """Color compression"""
    num_tuples = len(data['colors']) / 3
    data['colorsData'] = []
    start = 0
    last = [data['colors'][x] for x in xrange(3)]
    # Short list comparison
    arrays_identical = lambda a, b: all([a[x] == b[x] for x in xrange(3)])
    # Compress the rest
    for tupl in xrange(num_tuples):
        index = tupl * 3
        tmp = [data['colors'][index + x] for x in xrange(3)]
        # Is this a new block?
        if not arrays_identical(last, tmp):
            data['colorsData'].append(dict(data=last, duration=tupl - start))
            start = tupl
            last = tmp
    # append the final color block
    data['colorsData'].append(dict(data=last, duration=num_tuples - start))
    # remove the colors index
    del data['colors']


#------------------------------------------------------------------------------

def translate_shell(shell):
    """Translates a shell"""
    if 'href' in shell.attrib:
        # Do href here
        return {
            'id': shell.attrib['id'],
            'size': int(shell.attrib['size']),
            'bbox': [float(x) for x in shell.attrib['bbox'].split(" ")],
            'href': shell.attrib['href'].replace("xml", "json")
        }
    else:
        # Convert XML point/vert/color to new way
        points = load_points(shell.iter("verts"))
        default_color = parse_color(shell.attrib.get('color', DEFAULT_COLOR))
        data = dict(id=shell.attrib['id'], size=0)
        data.update({x: [] for x in ('points', 'normals', 'colors')})
        for facet in shell.iter('facets'):
            color = default_color
            if 'color' in facet.attrib:
                color = parse_color(facet.attrib['color'])
            for f in facet.iter('f'):
                # Get every vertex index and convert using points array
                index_vals = f.attrib['v'].split(" ")
                for i in range(3):
                    ival = int(index_vals[i]) * 3
                    data['points'].append(float(points[ival]))
                    data['points'].append(float(points[ival + 1]))
                    data['points'].append(float(points[ival + 2]))

                # Get the vertex normals
                norms = [x for x in f.iter('n')]
                for i in range(3):
                    norm_coordinates = norms[i].attrib['d'].split(" ")
                    for j in range(3):
                        data['normals'].append(float(norm_coordinates[j]))

                # Get the vertex colors
                for i in range(3):
                    for c in ('r', 'g', 'b'):
                        data['colors'].append(color[c])

        data['size'] = len(data['points']) / 9
        indexing = [x for x in CONFIG if x.startswith('index') and CONFIG[x]]
        for i in indexing:
            data['precision'] = CONFIG['roundPrecision']
            if 'values' not in data:
                data['values'] = {}
            globals()[i](data)
        if indexing:
            sorted_vals = sorted(data['values'].items(), key=itemgetter(1))
            data['values'] = map(itemgetter(0), sorted_vals)
        if CONFIG.get('compressColors'):
            compress_shell_colors(data)
        return data


def parse_color(hex_color):
    """Parse color values"""
    cval = int(hex_color, 16)
    x = lambda b: ((cval >> b) & 0xff) / 255.0
    return {k: x(v) for k, v in dict(r=16, g=8, b=0).iteritems()}


def load_points(verts):
    """Load all of the point information"""
    points = []
    for vert in verts:
        for v in vert:
            points.extend(v.attrib['p'].split(" "))
    return points


#------------------------------------------------------------------------------

class WorkerBase(Process):
    """Base class for Workers"""

    def __init__(self, queue, exceptions):
        Process.__init__(self)
        self.queue = queue
        self.exceptions = exceptions

    def report_exception(self, job, reason):
        """Report a job exception"""
        info = dict(reason=reason)
        info.update(job)
        self.exceptions.put(info)

    def run(self):
        raise NotImplementedError


class BatchWorker(WorkerBase):
    """Worker process for parallelized shell batching"""

    def run(self):
        """Process jobs"""
        while True:
            job = self.queue.get()
            if job is None:
                break
            # process shells
            batch = {'shells': []}
            indexed = CONFIG['indexPoints'] or CONFIG['indexNormals']
            reindex = job['reindex'] and indexed
            if reindex:
                batch['values'] = {}
            for s in job['shells']:
                try:
                    with open(join(job['path'], s)) as f:
                        shell = json.load(f)
                    sid = SHELL_REGEX.match(s).group(1)
                    shell['id'] = sid
                    if reindex:
                        imap = {}
                        for i, value in enumerate(shell['values']):
                            if value not in batch['values']:
                                batch['values'][value] = len(batch['values'])
                            imap[i] = batch['values'][value]
                        del shell['values']
                        for item in ('points', 'normals'):
                            idx = item + 'Index'
                            if idx in shell:
                                shell[idx] = [imap[x] for x in shell[idx]]
                    batch['shells'].insert(0, shell)
                except Exception as e:
                    reason = "Error batching shell '{}': {}".format(s, e)
                    self.report_exception(job, reason)
                    continue
            # transform values to list
            if reindex:
                sorted_v = sorted(batch['values'].items(), key=itemgetter(1))
                batch['values'] = map(itemgetter(0), sorted_v)
            # write batch
            out_path = join(job['path'], job['name'] + ".json")
            try:
                with open(out_path, "w") as f:
                    json.dump(batch, f)
            except Exception as e:
                reason = "Unable to output JSON '{}': {}.".format(out_path, e)
                self.report_exception(job, reason)


class TranslationWorker(WorkerBase):
    """Worker process for parallelized translation"""

    def run(self):
        """Process jobs"""
        while True:
            job = self.queue.get()
            if job is None:
                break
            try:
                path = job['path']
                tree = ET.parse(path)
                root = tree.getroot()
            except Exception as e:
                fpath = job.get('path', '?')
                reason = "Unable to parse XML file '{}': {}.".format(fpath, e)
                self.report_exception(job, reason)
                continue
            try:
                data = job['translator'](root)
            except Exception as e:
                reason = "Translation failure: '{}'.".format(e)
                self.report_exception(job, reason)
                continue
            out_path = os.path.splitext(path)[0] + ".json"
            try:
                with open(out_path, "w") as f:
                    json.dump(data, f)
            except Exception as e:
                reason = "Unable to output JSON '{}': {}.".format(out_path, e)
                self.report_exception(job, reason)


class XMLTranslator(object):
    """Translates STEP XML files to JSON"""

    def __init__(self, batches=None, reindex=None):
        self.batches = batches
        self.reindex = reindex

    @staticmethod
    def assign(batches, shell):
        """simple bin packing"""
        name, size = shell
        blist = batches.values()
        best = min([x['total_size'] for x in blist])
        selected = [x for x in blist if x['total_size'] == best][0]
        selected['total_size'] += size
        selected['shells'].append(name)

    def get_batches(self, shells):
        """assign shells to batches, leveling by size"""
        batches = {'batch%s' % i:  {'total_size': 0, 'shells': []}
                   for i in xrange(self.batches)}
        for shell in shells:
            self.assign(batches, shell)
        return batches

    def batch_shells(self, xml_dir):
        """Generates batched shell files"""
        is_shell = lambda x: SHELL_REGEX.match(x)
        size_of = lambda x: os.path.getsize(join(xml_dir, x))
        shells = [(x, size_of(x)) for x in os.listdir(xml_dir) if is_shell(x)]
        shells.sort(key=itemgetter(1), reverse=True)
        batches = self.get_batches(shells)

        # start workers and queue jobs
        queue = Queue()
        exceptions = Queue()
        count = min(cpu_count(), self.batches)
        workers = [BatchWorker(queue, exceptions) for _ in xrange(count)]
        for w in workers:
            w.start()

        # enqueue jobs
        for batch, info in batches.items():
            job = {'path': xml_dir, 'name': batch, 'shells': info['shells'],
                   'reindex': self.reindex}
            queue.put(job)

        # add worker termination cues
        for _ in workers:
            queue.put(None)

        # wait for completion
        while any([x.is_alive() for x in workers]):
            time.sleep(1)

        # report errors, if any
        has_errors = not exceptions.empty()
        while not exceptions.empty():
            info = exceptions.get()
            msg = "Error processing '{}': {}"
            LOG.error(msg.format(info['path'], info['reason']))

        if not has_errors:
            # report statistics
            msg = "Batch sizes.  Smallest: {} Largest: {} Avg: {}"
            sz = [x['total_size'] for x in batches.values()]
            LOG.debug(msg.format(min(sz), max(sz), sum(sz) / len(batches)))
            c = [len(x['shells']) for x in batches.values()]
            msg = "Batch shells.  Smallest: {} Largest: {} Avg: {}"
            LOG.debug(msg.format(min(c), max(c), sum(c) / len(batches)))
            shells_size = sum([size for name, size in shells])
            msg = "Shells.  Count: {} Total Size: {} bytes."
            LOG.debug(msg.format(len(shells), shells_size))
            regex = re.compile("batch[0-9]*.json")
            is_batch = lambda x: regex.match(x)
            sizes = [size_of(x) for x in os.listdir(xml_dir) if is_batch(x)]
            batches_size = sum(sizes)
            msg = "Batches.  Count: {} Total Size: {} bytes."
            LOG.debug(msg.format(len(sizes), batches_size))
            compression = float(batches_size) / float(shells_size)
            LOG.debug("Compression: {}".format(compression))

        return has_errors

    def translate(self, xml_dir, xml_index):
        """Process index XML and enqueue jobs for workers"""
        if not os.path.isdir(xml_dir):
            LOG.error("'{}' is not a directory.".format(xml_dir))
            return True
        index_path = join(xml_dir, xml_index)
        if not os.path.isfile(index_path):
            LOG.error("Unable to locate index file '{}'.".format(index_path))
            return True
        try:
            tree = ET.parse(index_path)
            root = tree.getroot()
        except Exception as e:
            LOG.exception("Unable to parse '{}'.".format(index_path))
            return True
        try:
            data = translate_index(root)
        except Exception as e:
            LOG.exception("Unable to translate index file.")
            return True

        pluck = lambda e, a: [x for x in data.get(e, []) if a in x]
        external_shells = pluck('shells', 'href')
        external_annotations = pluck('annotations', 'href')
        index_out = join(xml_dir, os.path.splitext(xml_index)[0] + ".json")

        LOG.debug("Writing new index file: " + index_out)
        LOG.debug("\tProducts: %s" % len(data.get('projects', [])))
        LOG.debug("\tShapes: %s" % len(data.get('shapes', [])))
        LOG.debug("\tAnnotations: %s" % len(data.get('annotations', [])))
        LOG.debug("\tExternal Annotations: %s" % len(external_annotations))
        LOG.debug("\tShells: %s" % len(data.get('shells', [])))
        num_shells = len(external_shells)
        LOG.debug("\tExternal Shells: %s" % num_shells)
        if self.batches and num_shells:
            if num_shells < self.batches:
                self.batches = 1
            LOG.debug("\tBatches: %s" % self.batches)
            data['batches'] = self.batches
        else:
            self.batches = 0

        try:
            with open(index_out, "w") as f:
                json.dump(data, f)
        except Exception as e:
            LOG.exception("Unable to write JSON file '{}'.".format(index_out))
            return True

        # start workers and queue jobs
        queue = Queue()
        exceptions = Queue()
        count = cpu_count()
        workers = [TranslationWorker(queue, exceptions) for _ in xrange(count)]
        for w in workers:
            w.start()

        xml_path = lambda p: join(xml_dir, os.path.splitext(p)[0] + ".xml")
        for annotation in external_annotations:
            queue.put({
                'type': "annotation",
                'path': xml_path(annotation['href']),
                'translator': translate_annotation
            })

        for shell in external_shells:
            queue.put({
                'type': "shell",
                'path': xml_path(shell['href']),
                'translator': translate_shell
            })

        # add worker termination cues
        for _ in workers:
            queue.put(None)

        # wait for completion
        while any([x.is_alive() for x in workers]):
            time.sleep(1)

        # report errors, if any
        has_errors = not exceptions.empty()
        while not exceptions.empty():
            info = exceptions.get()
            msg = "Error processing '{}': {}"
            LOG.error(msg.format(info['path'], info['reason']))

        if has_errors or not self.batches:
            return has_errors

        return self.batch_shells(xml_dir)

#------------------------------------------------------------------------------

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        prog='xmlToJson.py',
        description="Translates STEP XML to JSON")
    parser.add_argument("dir", help="directory containing STEP XML")
    parser.add_argument("index", help="index file")
    h = "create batches of shells"
    parser.add_argument("-b", "--batches", type=int, default=0, help=h)
    h = "re-index when batching shells"
    parser.add_argument("-r", "--reindex", action="store_true", help=h)
    args = parser.parse_args()

    start_time = datetime.now()
    translator = XMLTranslator(args.batches, args.reindex)
    errors_in_translation = translator.translate(args.dir, args.index)
    dt = datetime.now() - start_time
    LOG.info("xmlToJson Elapsed time: {} secs".format(dt.seconds))
    sys.exit(1 if errors_in_translation else 0)
