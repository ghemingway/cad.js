var fs = require("fs"),
    _ = require("underscore"),
    xml2js = require("xml2js"),
    opts = require("commander");

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
            { "ref": "id1394", "xform": [1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1] },
            { "ref": "id1399", "xform": [1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1] }
        ]
    }
    // Terminal Shape JSON
    {
        "id": "id1394",
        "unit": "mm 0.001000",
        "shell": "id1215"
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
        "color": "dfdfdf",
        "verts": [
            152.4, 1860.55, 1005,
            ..., ..., ...
        ],
        "facets": [
            {
                "color": "7d7d7d",
                "v": [32,44,45],
                 <n d="0 1 0"/>
                 <n d="0 1 0"/>
                 <n d="0 1 0"/>
            }
        ]
        "colors": ["dfdfdf", "7d7d7d"],
        "verts": [

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
        data.shape = product.$.shape.split(" ");
    }
    return data;
};

var translateShape = function(shape) {
    // Parent Shape JSON
    var parentShape = {
        "id": "id1404",
        "unit": "mm 0.001000",
        "children": [
            { "ref": "id1394", "xform": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1] },
            { "ref": "id1399", "xform": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1] }
        ]
    };
    // Terminal Shape JSON
    var terminalShape = {
        "id": "id1394",
        "unit": "mm 0.001000",
        "shell": "id1215"
    };
    return {};
};

var translateShell = function(shell) {
    return {};
};


/*************************************************************************/


var scanDirForXML = function(dirname) {
    fs.readdir(dirname, function(err, files) {
        console.log(files);
    });
};


/*************************************************************************/


var filename = "./data/e137_hull_double_v_3panel_roof/index.xml";
var parser = new xml2js.Parser();
fs.readFile(filename, function(err, doc) {
    if (err) {
        console.log("Error reading file: " + filename);
    }
    parser.parseString(doc, function(err, results) {
        if (!err) {
            var data = translateIndex(results);
            console.log(data);
        }
    });
});
