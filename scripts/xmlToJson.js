/* G. Hemingway Copyright @2014
 * Convert a CAD model (per the STEPTOOLS defined XML spec) into a JSON spec model
 */

var fs = require("fs"),
    _ = require("underscore"),
    os = require("os"),
    xml2js = require("xml2js");

/***********************************************************************/

var config = {
    indexPoints: true,
    indexNormals: true,
    indexColors: true,
    compressColors: true,
    roundPrecision: 3
};


var roundFloat = function(val, precision) {
    if (!precision) return val;
    var factor = Math.pow(10, precision);
    return Math.round(val * factor) / factor;
};

/***********************************************************************/


var translateIndex = function(doc) {
    // Return the full JSON
    return {
        root: doc["step-assembly"].$.root,
        products:    _.map(doc["step-assembly"].product, translateProduct),
        shapes:      _.map(doc["step-assembly"].shape, translateShape),
        shells:      _.map(doc["step-assembly"].shell, translateShell),
        annotations: _.map(doc["step-assembly"].annotation, translateAnnotation)
    };
};

var translateProduct = function(product) {
    var data = {
        "id": product.$.id,
        "step": product.$.step,
        "name": product.$.name
    };
    // Add children, if there are any
    if (product.$.children) {
        data.children = product.$.children.split(" ");
    }
    // Add shapes, if there are any
    if (product.$.shape) {
        data.shapes = product.$.shape.split(" ");
    }
    return data;
};

var setTransform = function(transform) {
    // Look for identity transforms
    if (transform === "1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1") return "I";
    // Otherwise, turn this into an array of float values
    return transform.split(" ").map(function(val) {
        return parseFloat(val);
    })
};

var translateShape = function(shape) {
    // Base Shape JSON
    var data = {
        "id": shape.$.id,
//        "unit": shape.$.unit,
        "shells": [],
        "annotations": [],
        "children": []
    };
    // Add children, if there are any
    _.forEach(shape.child, function(child) {
        data.children.push({
            "ref": child.$.ref,
            "xform": setTransform(child.$.xform)
        });
    });
    // Add child annotations
    if (shape.$.annotation) {
        data.annotations = shape.$.annotation.split(" ");
    }
    // Terminal Shape JSON
    if (shape.$.shell) {
        data.shells = shape.$.shell.split(" ");
    }
    return data;
};

var translateAnnotation = function(annotation) {
    var data = {
        "id": annotation.$.id
    };
    // Is this a non-terminal annotation
    if (annotation.$.href) {
        data.href = annotation.$.href.replace("xml", "json");
    // Otherwise, add all those lines
    } else {
        data.lines = _.map(annotation.polyline, function(polyline) {
            var points = [];
            _.forEach(polyline.p, function(line) {
                _.forEach(line.$.l.split(" "), function(val) {
                    points.push(parseFloat(val));
                });
            });
            return points;
        });
    }
    return data;
};

/***********************************************************************/

var indexShellPoints = function(data) {
    var numPoints = data.points.length;
    data.pointsIndex = [];
    for (var i = 0; i < numPoints; i++) {
        var val = roundFloat(data.points[i], config.roundPrecision);
        // See if this norm is already known
        var index = data.values.indexOf(val);
        if (index === -1) {
            index = data.values.push(val) - 1;
        }
        data.pointsIndex.push(index);
    }
    delete data.points;
};

var indexShellNormals = function(data) {
    var numNormals = data.normals.length;
    var indexArray = [];
    for (var i = 0; i < numNormals; i++) {
        var val = roundFloat(data.normals[i], config.roundPrecision);
        // See if this norm is already known
        var index = data.values.indexOf(val);
        if (index === -1) {
            index = data.values.push(val) - 1;
        }
        indexArray.push(index);
    }
    data.normalsIndex = indexArray;
    delete data.normals;
};

var indexShellColors = function(data) {
    var numColors = data.colors.length;
    var indexArray = [];
    for (var i = 0; i < numColors; i++) {
        var val = roundFloat(data.colors[i], config.roundPrecision);
        // See if this norm is already known
        var index = data.values.indexOf(val);
        if (index === -1) {
            index = data.values.push(val) - 1;
        }
        indexArray.push(index);
    }
    data.colorsIndex = indexArray;
    delete data.colors;
};

var compressShellColors = function(data) {
    var numTuples = data.colorsIndex.length / 3;
    data.colorsData = [];
    var start = 0;
    var last = [
        data.colorsIndex[0],
        data.colorsIndex[1],
        data.colorsIndex[2]
    ];
    // Short list comparison
    function arraysIdentical(a, b) {
       return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]);
    }
    // Compress the rest
    for (var tuple = 1; tuple < numTuples; tuple++) {
        var index = tuple * 3;
        var tmp = [
            data.colorsIndex[index],
            data.colorsIndex[index + 1],
            data.colorsIndex[index + 2]
        ];
        // Is this a new block
        if (!arraysIdentical(last, tmp)) {
            data.colorsData.push({
                data: last,
                duration: tuple - start
            });
            start = tuple;
        }
    }
    // Push the final color block
    data.colorsData.push({
        data: last,
        duration: numTuples - start
    });
    // Remove the colorsIndex
    delete data.colorsIndex;
//    console.log(JSON.stringify(data.colorsData));
};

/***********************************************************************/

var translateShell = function(shell) {
    // Do href here
    if (shell.$.href) {
        return {
            "id": shell.$.id,
            "size": parseInt(shell.$.size),
            "bbox": shell.$.bbox.split(" ").map(function(val) { return parseFloat(val); }),
            "href":  shell.$.href.replace("xml", "json")
        };
    // Convert XML point/vert/color to new way
    } else {
        var points = loadPoints(shell.verts);
        var defaultColor = parseColor("7d7d7d");
        if (shell.$.color) {
            defaultColor = parseColor(shell.$.color);
        }
        var data = {
            "id": shell.$.id,
            "size": 0,
            "points": [],
            "normals": [],
            "colors": []
        };
        _.forEach(shell.facets, function(facet) {
            var color = _.clone(defaultColor);
            if (facet.$ && facet.$.color) {
                color = parseColor(facet.$.color);
            }
            _.forEach(facet.f, function(f) {
                // Get every vertex index and convert using points array
                var indexVals = f.$.v.split(" ");
                var index0 = parseInt(indexVals[0]) * 3;
                var index1 = parseInt(indexVals[1]) * 3;
                var index2 = parseInt(indexVals[2]) * 3;

                data.points.push(parseFloat(points[index0]));
                data.points.push(parseFloat(points[index0 + 1]));
                data.points.push(parseFloat(points[index0 + 2]));
                data.points.push(parseFloat(points[index1]));
                data.points.push(parseFloat(points[index1 + 1]));
                data.points.push(parseFloat(points[index1 + 2]));
                data.points.push(parseFloat(points[index2]));
                data.points.push(parseFloat(points[index2 + 1]));
                data.points.push(parseFloat(points[index2 + 2]));

                // Get the vertex normals
                var norms = f.n;
                var normCoordinates = norms[0].$.d.split(" ");
                data.normals.push(parseFloat(normCoordinates[0]));
                data.normals.push(parseFloat(normCoordinates[1]));
                data.normals.push(parseFloat(normCoordinates[2]));
                normCoordinates = norms[1].$.d.split(" ");
                data.normals.push(parseFloat(normCoordinates[0]));
                data.normals.push(parseFloat(normCoordinates[1]));
                data.normals.push(parseFloat(normCoordinates[2]));
                normCoordinates = norms[2].$.d.split(" ");
                data.normals.push(parseFloat(normCoordinates[0]));
                data.normals.push(parseFloat(normCoordinates[1]));
                data.normals.push(parseFloat(normCoordinates[2]));

                // Get the vertex colors
                data.colors.push(color.r);
                data.colors.push(color.g);
                data.colors.push(color.b);
                data.colors.push(color.r);
                data.colors.push(color.g);
                data.colors.push(color.b);
                data.colors.push(color.r);
                data.colors.push(color.g);
                data.colors.push(color.b);
            });
        });
        // Set the point data size
        data.size = data.points.length / 9;
        if (config.indexPoints || config.indexNormals || config.indexColors) {
            data.values = [];
        }
        // Should we index the normals
        if (config.indexPoints) {
            indexShellPoints(data);
        }
        // Should we index the normals
        if (config.indexNormals) {
            indexShellNormals(data);
        }
        // Should we index the colors
        if (config.indexColors) {
            indexShellColors(data);
        }
        // Should we hyper-compress the colors
        if (config.compressColors) {
            compressShellColors(data);
        }
        console.log("\tShell size: " + data.size * 3);
        return data;
    }
};

function parseColor(hex) {
    var cval = parseInt(hex, 16);
    return {
        r: ((cval >>16) & 0xff) / 255,
        g: ((cval >>8) & 0xff) / 255,
        b: ((cval >>0) & 0xff) / 255
    };
}

function loadPoints(verts) {
    // Load all of the point information
    var points = [];
    _.forEach(verts, function(vert) {
        _.forEach(vert.v, function(v) {
            var coords = v.$.p.split(" ");
            points.push(coords[0]);
            points.push(coords[1]);
            points.push(coords[2]);
        });
    });
    return points;
}

/*************************************************************************/

// Get the workers
var async = require("async");


function XMLTranslator() {
    var self = this;
    this.parser = new xml2js.Parser();
    this.queue = [];
    this.workers = [];
    this.freeWorkers = [];
    var maxWorkers = os.cpus().length;

    // Spawn all of the threads we need
    console.log("Spawning Workers: " + maxWorkers);
    this.queue = async.queue(function(task, callback) {
        self.exec(task, callback);
    }, maxWorkers);
}

XMLTranslator.prototype.translate = function(dir, filename) {
    var self = this;
    this.pathPrefix = dir + "/";
    var rootPath = this.pathPrefix + filename;
    // Setup XML parser
    // Read the root file
    fs.readFile(rootPath, function(err, doc) {
        if (err) {
            console.log("Error reading index file: " + rootPath);
        }
        self.parser.parseString(doc, function(err, results) {
            if (!err) {
                var data = translateIndex(results);
                // Get output file name
                var indexOut = self.pathPrefix + filename.replace("xml", "json");
                var externalShells = _.pluck(data.shells, "href");
                var externalAnnotations = _.pluck(data.annotations, "href");
                console.log("Writing new index file: " + indexOut);
                console.log("\tProducts: " + data.products.length);
                console.log("\tShapes: " + data.shapes.length);
                console.log("\tAnnotations: " + data.annotations.length);
                console.log("\tExternal Annotations: " + externalAnnotations.length);
                console.log("\tShells: " + data.shells.length);
                console.log("\tExternal Shells: " + externalShells.length);
                // Write index to file
                fs.writeFileSync(indexOut, JSON.stringify(data));

                // Push jobs to the workers
                _.forEach(externalAnnotations, function(annotation) {
                    self.queue.push({
                        type: "annotation",
                        path: annotation,
                        func: translateAnnotation
                    });
                });
                _.forEach(externalShells, function(shell) {
                    self.queue.push({
                        type: "shell",
                        path: shell,
                        func: translateShell
                    });
                });
            } else {
                console.log("Error parsing index file: " + err);
            }
        });
    });
};

XMLTranslator.prototype.exec = function(task, callback) {
    var self = this;
    var path = this.pathPrefix + task.path.replace("json", "xml");
    fs.readFile(path, function(err, doc) {
        if (err) {
            console.log("Not able to read file: " + path);
            console.log(err);
        } else {
            self.parser.parseString(doc, function(err, results) {
                if (err) {
                    console.log("Invalid XML: " + err);
                } else {
                    console.log("Translating: " + path);
                    var data = task.func(results[task.type]);
                    var outPath = self.pathPrefix + task.path.replace("xml", "json");
                    // Write the object to file
                    fs.writeFileSync(outPath, JSON.stringify(data));
                    // Now done
                    callback();
                }
            });
        }
    });
};

/*************************************************************************/


var argv = require('optimist')
    .demand(['i'])
    .argv;

// Translate the requested model file
var translator = new XMLTranslator();
translator.translate(argv.d, argv.i);
