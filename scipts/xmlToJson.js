var fs = require("fs"),
    _ = require("underscore"),
    xml2js = require("xml2js");

/***********************************************************************/

/*
<step-assembly root="id8701">
    <product .../>
    <product .../>
    <product .../>

    <shape .../>
    <shape .../>
    <shape .../>

    <shell .../>
    <shell .../>
    <shell .../>
</step-assembly>

<product id="id8701" step="partname.stp" name="this_is_a_label" shape="id607" children="id8678 id602"/>

<shape id="id1404" unit="mm 0.001000">
    <child ref="id1394" xform="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1"/>
    <child ref="id1399" xform="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1"/>
</shape>
<shape id="id1394" unit="mm 0.001000" shell="id1215"/>

<shell id="id805" size="84" bbox="2252.53 -1490.73 -4483.1 2866.8 1490.73 -4159.3" a="3.91799e+06" href="shell_id805.xml"/>
<shell id="id575" color="dfdfdf">
    <verts>                                     // Only 1 verts per shell
        <v p="152.4 1860.55 1005"/>
        <v .../>
        <v .../>
    </verts>
    <facets color="7d7d7d">
        <f v="32 44 45" fn="-0 1 -0">
            <n d="0 1 0"/>
            <n d="0 1 0"/>
            <n d="0 1 0"/>
        </f>
        <f>
            ...
        </f>
    </facets>
 </shell>
 */

/*
    // Assembly JSON
    {
        "root": "id8701",
        "products": [],
        "shapes":   [],
        "shells":   []
    }

    // Product JSON
    {
        "id": "id8701",
        "step": "partname.stp",
        "name": "this_is_a_label",
        "shape": ["id607"],
        "children": ["id8678","id602"]
    }

    // Parent Shape JSON
    {
        "id": "id1404",
        "unit": "mm 0.001000",
        "children": [
            { "ref": "id1394", "xform": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1] },
            { "ref": "id1399", "xform": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1] }
        ]
    }
    // Terminal Shape JSON
    {
        "id": "id1394",
        "unit": "mm 0.001000",
        "shells": ["id1215","id1234"]
     }

     // Stub Shell JSON
    {
        "id": "id805",
        "size": 84,
        "bbox": [2252.53,-1490.73,-4483.1,2866.8,1490.73,-4159.3],
        "href": "shell_id805.xml"
    }
    // Terminal Shell JSON
    {
        "id": "id575",
        "points": [
            152.4, 1860.55, 1005,
            ..., ..., ...
        ],
        "normals": [
            152.4, 1860.55, 1005,
            ..., ..., ...
        ]
        "colors": [
            "dfdfdf", "7d7d7d", "9s9sk2",
            ..., ..., ...
        ]
    }
 */
var translateIndex = function(doc) {
    // Return the full JSON
    return {
        root: doc["step-assembly"].$.root,
        products: _.map(doc["step-assembly"].product, translateProduct),
        shapes: _.map(doc["step-assembly"].shape, translateShape),
        shells: _.map(doc["step-assembly"].shell, translateShell)
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
    // Terminal Shape JSON
    if (shape.$.shell) {
        data.shells = shape.$.shell.split(" ");
    }
    return data;
};

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
                indexVals = f.$.v.split(" ");
                index0 = parseInt(indexVals[0]) * 3;
                index1 = parseInt(indexVals[1]) * 3;
                index2 = parseInt(indexVals[2]) * 3;

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
                norms = f.n;
                normCoordinates = norms[0].$.d.split(" ");
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
        data.size = data.points.length / 9;
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


var argv = require('optimist')
    .demand(['i'])
    .argv;

var parser = new xml2js.Parser();
var pathPrefix = argv.d + "/";
var rootPath = pathPrefix + argv.i;
fs.readFile(rootPath, function(err, doc) {
    if (err) {
        console.log("Error reading index file: " + rootPath);
    }
    parser.parseString(doc, function(err, results) {
        if (!err) {
            var data = translateIndex(results);
            // Get output file name
            var indexOut = pathPrefix + argv.i.replace("xml", "json");
            var externals = _.pluck(data.shells, "href");
            console.log("Writing new index file: " + indexOut);
            console.log("\tProducts: " + data.products.length);
            console.log("\tShapes: " + data.shapes.length);
            console.log("\tShells: " + data.shells.length);
            console.log("\tExternal Shells: " + externals.length);
            // Write index to file
            fs.writeFileSync(indexOut, JSON.stringify(data));
            // Get all of the href's for external shells
            _.forEach(externals, function(external) {
                var shellPath = pathPrefix + external.replace("json", "xml");
                fs.readFile(shellPath, function(err, doc) {
                    parser.parseString(doc, function(err, results) {
                        data = translateShell(results.shell);
                        var shellOut = pathPrefix + external.replace("xml", "json");
                        console.log("\tShell: " + shellOut);
                        console.log("\t\tSize: " + data.size);
                        // Write shell to file
                        fs.writeFileSync(shellOut, JSON.stringify(data));
                    });
                });
            });
        }
    });
});
