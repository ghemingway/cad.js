#!/usr/bin/env python

# L. Howard Copyright @2014
# Convert a CAD model (per the STEPTOOLS defined XML spec)
# into a JSON spec model
# Derived from Javascript version at
# https://github.com/ghemingway/cad.js/blob/master/scripts/xmlToJson.js

import argparse
import json
from multiprocessing import cpu_count, Process, Queue
import os
from os.path import join
import sys
import time
import xml.etree.ElementTree as ET

import logging
logging.basicConfig(format='%(asctime)s %(levelname)s:%(message)s',
                    level=logging.INFO)
LOG = logging.getLogger(__name__)

# defaults and constants
DEFAULT_COLOR = "7d7d7d"
IDENTITY_TRANSFORM = "1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1"


#------------------------------------------------------------------------------

def translateIndex(doc):
    """Returns the full JSON"""
    return {
        'root': doc.attrib['root'],
        'products': [translateProduct(x) for x in doc.iter('product')],
        'shapes': [translateShape(x) for x in doc.iter('shape')],
        'shells': [translateShell(x) for x in doc.iter('shell')],
        'annotations': [translateAnnotation(x) for x in doc.iter('annotation')]
    }


def translateProduct(product):
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


def setTransform(transform):
    """Sets a transform"""
    return ("I" if transform == IDENTITY_TRANSFORM else
            [float(x) for x in transform.split(" ")])


def translateShape(shape):
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
            'xform': setTransform(child.attrib['xform'])
        })
    # Add child annotations
    if shape.attrib.get('annotation'):
        data['annotations'] = shape.attrib['annotation'].split(" ")
    # Terminal Shape JSON
    if shape.attrib.get('shell'):
        data['shells'] = shape.attrib['shell'].split(" ")
    return data


def translateAnnotation(annotation):
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


def translateShell(shell):
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
        points = loadPoints(shell.iter("verts"))
        defaultColor = parseColor(shell.attrib.get('color', DEFAULT_COLOR))
        data = dict(id=shell.attrib['id'], size=0)
        data.update({x: [] for x in ('points', 'normals', 'colors')})
        for facet in shell.iter('facets'):
            color = defaultColor
            if 'color' in facet.attrib:
                color = parseColor(facet.attrib['color'])
            for f in facet.iter('f'):
                # Get every vertex index and convert using points array
                indexVals = f.attrib['v'].split(" ")
                for i in range(3):
                    ival = int(indexVals[i]) * 3
                    data['points'].append(float(points[ival]))
                    data['points'].append(float(points[ival + 1]))
                    data['points'].append(float(points[ival + 2]))

                # Get the vertex normals
                norms = [x for x in f.iter('n')]
                for i in range(3):
                    normCoordinates = norms[i].attrib['d'].split(" ")
                    for j in range(3):
                        data['normals'].append(float(normCoordinates[j]))

                # Get the vertex colors
                for i in range(3):
                    for c in ('r', 'g', 'b'):
                        data['colors'].append(color[c])

        data['size'] = len(data['points']) / 9
        return data


def parseColor(hex):
    """Parse color values"""
    cval = int(hex, 16)
    x = lambda b: (cval >> b) & 0xff
    return {k: x(v) for k, v in dict(r=16, g=8, b=0).items()}


def loadPoints(verts):
    """Load all of the point information"""
    points = []
    for vert in verts:
        for v in vert:
            points.extend(v.attrib['p'].split(" "))
    return points


#------------------------------------------------------------------------------

class Worker(Process):
    """Worker process for parallelized translation"""

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
                reason = "Unable to parse XML file '{}'.".format(path)
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
                continue


class XMLTranslator(object):
    """Translates STEP XML files to JSON"""

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
            data = translateIndex(root)
        except Exception as e:
            LOG.exception("Unable to translate index file.")
            return True

        pluck = lambda e, a: [x for x in data.get(e, []) if a in x]
        externalShells = pluck('shells', 'href')
        externalAnnotations = pluck('annotations', 'href')
        indexOut = join(xml_dir, os.path.splitext(xml_index)[0] + ".json")

        LOG.info("Writing new index file: " + indexOut)
        LOG.info("\tProducts: %s" % len(data.get('projects', [])))
        LOG.info("\tShapes: %s" % len(data.get('shapes', [])))
        LOG.info("\tAnnotations: %s" % len(data.get('annotations', [])))
        LOG.info("\tExternal Annotations: %s" % len(externalAnnotations))
        LOG.info("\tShells: %s" % len(data.get('shells', [])))
        LOG.info("\tExternal Shells: %s" % len(externalShells))

        try:
            with open(indexOut, "w") as f:
                json.dump(data, f)
        except Exception as e:
            LOG.exception("Unable to write JSON file '{}'.".format(indexOut))
            return True

        # start workers and queue jobs
        queue = Queue()
        exceptions = Queue()
        workers = [Worker(queue, exceptions) for w in xrange(cpu_count())]
        for w in workers:
            w.start()

        xml_path = lambda p: join(xml_dir, os.path.splitext(p)[0] + ".xml")
        for annotation in externalAnnotations:
            queue.put({
                'type': "annotation",
                'path': xml_path(annotation['href']),
                'translator': translateAnnotation
            })

        for shell in externalShells:
            queue.put({
                'type': "shell",
                'path': xml_path(shell['href']),
                'translator': translateShell
            })

        # add worker termination cues
        for w in workers:
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

        # return success/failure result
        return has_errors

#------------------------------------------------------------------------------

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        prog='xmlToJson.py',
        description="Translates STEP XML to JSON")
    parser.add_argument("dir", help="directory containing STEP XML")
    parser.add_argument("index", help="index file")
    args = parser.parse_args()

    translator = XMLTranslator()
    has_errors = translator.translate(args.dir, args.index)
    sys.exit(1 if has_errors else 0)
