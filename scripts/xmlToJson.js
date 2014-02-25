/* G. Hemingway Copyright @2014
 * Convert a CAD model (per the STEPTOOLS defined XML spec) into a JSON spec model
 */

var fs = require("fs"),
    _ = require("underscore"),
    xml2js = require("xml2js"),
    libxmljs = require("libxmljs");

var parseTime = 0, translateTime = 0, writeTime = 0;
var config = {
    indexPoints: true,
    indexNormals: true,
    indexColors: true,
    compressColors: true,
    roundPrecision: 2
};

/***********************************************************************/


var roundFloat = function(val, precision) {
    if (!precision) return val;
    var factor = Math.pow(10, precision);
    return Math.round(val * factor);// / factor;
};

/***********************************************************************/


var translateIndex = function(doc) {
    // Return the full JSON
    var startTime = Date.now();
    var data = {
        root: doc["step-assembly"].$.root,
        products:    _.map(doc["step-assembly"].product, translateProduct),
        shapes:      _.map(doc["step-assembly"].shape, translateShape),
        shells:      _.map(doc["step-assembly"].shell, translateShell),
        annotations: _.map(doc["step-assembly"].annotation, translateAnnotation)
    };
    var stopTime = Date.now();
    process.stdout.write("Xlate: " + (stopTime - startTime).toString() + "ms, ");
    return data;
};

var showIndex = function(data) {
    var externalShells = _.pluck(data.shells, "href");
    var externalAnnotations = _.pluck(data.annotations, "href");
    console.log("\tProducts: " + data.products.length);
    console.log("\tShapes: " + data.shapes.length);
    console.log("\tAnnotations: " + data.annotations.length);
    console.log("\tExternal Annotations: " + externalAnnotations.length);
    console.log("\tShells: " + data.shells.length);
    console.log("\tExternal Shells: " + externalShells.length);
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
            last = tmp;
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
        var startTime = Date.now();
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
            if (config.roundPrecision) {
                data.precision = config.roundPrecision;
            }
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
            // Should we hyper-compress the colors
            if (config.compressColors) {
                compressShellColors(data);
            }
        }
        var stopTime = Date.now();
        process.stdout.write("Xlate: " + (stopTime - startTime).toString() + "ms, ");
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

function XMLTranslator() {
    this.parser = new xml2js.Parser();
}

XMLTranslator.prototype.parse = function(dir, filename, callback) {
    var self = this;
    this.pathPrefix = dir + "/";
    var rootPath = this.pathPrefix + filename;
    // Read the root file
    process.stdout.write(rootPath + ": (Parse: ");
    fs.readFile(rootPath, function(err, doc) {
        if (err) {
            callback(err);
        } else {
            var startTime = Date.now();
            self.parser.parseString(doc, function(err, results) {
                var stopTime = Date.now();
                process.stdout.write((stopTime - startTime).toString() + "ms, ");
                if (err) {
                    console.log("Error parsing file: " + rootPath);
                    callback(err);
                } else {
                    callback(undefined, results);
                }
            });
        }
    });
};

XMLTranslator.prototype.write = function(directory, filename, data, callback) {
    var path = directory + "/" + filename.replace("xml", "json");
    // Write the object to file
    var startTime = Date.now();
    fs.writeFile(path, JSON.stringify(data), function(err) {
        var stopTime = Date.now();
        process.stdout.write("Write: " + (stopTime - startTime).toString() + "ms)\n");
        if (callback) callback(err, data);
    });
};

/*************************************************************************/


var argv = require('optimist')
    .default('d', '.')
    .argv;

var translator = new XMLTranslator();
// Translate the requested model file
translator.parse(argv.d, argv.f, function(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    // Is this is an assembly
    if (data["step-assembly"]) {
        translator.write(argv.d, argv.f, translateIndex(data), function(err, data) {
            showIndex(data);
            // What is external
            var externalShells = _.pluck(data.shells, "href");
            var externalAnnotations = _.pluck(data.annotations, "href");
            // Push jobs to the workers
            _.forEach(externalShells, function(shell) {
                shell = shell.replace("json", "xml");
                cp.fork("scripts/xmlToJson.js", ["-d", argv.d, "-f", shell]);
            });
            _.forEach(externalAnnotations, function(annotation) {
                annotation = annotation.replace("json", "xml");
                cp.fork("scripts/xmlToJson.js", ["-d", argv.d, "-f", annotation]);
            });
        });
    } else if (data["shell"]) {
        translator.write(argv.d, argv.f, translateShell(data.shell), function(err, data) {
        });
    } else if (data["annotation"]) {
        translator.write(argv.d, argv.f, translateAnnotation(data.annotation), function(err, data) {
        });
    } else {
        console.log("Unknown XML file type");
    }
});
