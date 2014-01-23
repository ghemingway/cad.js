/* G. Hemingway Copyright @2014
 * XML Data loader - should be folded in with DataLoader and extended to handle JSON
 */

"use strict";


/********************************* Helper Functions ********************************/

function ShapeBuilder(rootXML, dataloader) {
//    this.root_element = rootXML;
    this.dataloader = dataloader;
    this.elementMap = this.buildElementMap(rootXML);
    this.objs = {};
}

ShapeBuilder.prototype.buildElementMap = function(xmlEl) {
    var ids = {};
    for (var i=0; i < xmlEl.childNodes.length; i++) {
        var ch = xmlEl.childNodes[i];
        if (ch.nodeType != Node.ELEMENT_NODE) continue;
        var id = ch.getAttribute("id");
        if (id) ids[id] = ch;
    }
    return ids;
};

ShapeBuilder.prototype.getElement = function(id) {
    return this.elementMap[id];
};

ShapeBuilder.prototype.find = function(id) {
    return this.objs[id];
};

/*
 * Look for a JS object corresponding to an id in the root element.
 * If an object already exists, return it.  Otherwise, initialize the
 * value for that slot to the fallback object and return null.
 *
 * This function can also optionally assert that the element with the
 * specified ID has the correct tagname.
 *
 */
ShapeBuilder.prototype.make = function(id, fallback, elName) {
//    console.log("StepBuilder.make: " + id + ", Name: " + elName);
    if (!id) {
        throw new Error("null id");
    }
    var ret = this.objs[id];
    if (ret) {
        return ret;
    }
    if (elName) {
        var el = this.getElement(id);
        if (el == null) {
            console.log ("StepBuilder.make - Could not get shape element: " + id);
            return null;
        }
        if (el.tagName != elName) {
            throw new Error ("StepBuilder.make - unexpected element name: " + el.tagName + " wanted: " + elName);
        }
    }
    this.objs[id] = fallback;
    return null;
};

ShapeBuilder.prototype.addLoadable = function(url, callback) {
    this.dataloader.addRequest(url, function(xmlRoot) {
        callback(xmlRoot);
    });
};

ShapeBuilder.prototype.getArrayFromAttribute = function(el, name) {
    // Get the XML attribute, from an element and split it an array if empty or missing, return empty array.
    var val = el.getAttribute(name);
    if (!val) return [];
    return val.split(" ");
};

/*
 * Parse a string into an array of float values.
 */
ShapeBuilder.prototype.parseFloatVec = function(str, count) {
    var vals = str.split(" ");
    if (count != null && vals.length != count) {
        throw new Error (
            "parse_float_vec: unexpected number of elements expecting "+count
                + " have " + vals.length);
    }
    count = vals.length;
    var ret = new Array(count);
    for (var i=0; i<count; i++) {
        var v = parseFloat(vals[i]);
        if (!isFinite(v)) throw new Error ("number is not finite");
        ret[i] = v;
    }
    return ret;
};

ShapeBuilder.prototype.parseBoundingBox = function(str) {
    var vals = this.parseFloatVec(str, 6);
    return new THREE.Box3(new THREE.Vector3(vals[0], vals[1], vals[2]), new THREE.Vector3(vals[3], vals[4], vals[5]));
};

ShapeBuilder.prototype.parseXform = function(str, colOriented) {
    if (str == null) return null;
    var arr = this.parseFloatVec(str);
    if (arr.length !== 16) {
        console.log("String: " + str);
        throw new Error("Invalid Xform found");
    }
    if (colOriented) {
        return new THREE.Matrix4(
            arr[0], arr[4], arr[8],  arr[12],
            arr[1], arr[5], arr[9],  arr[13],
            arr[2], arr[6], arr[10], arr[14],
            arr[3], arr[7], arr[11], arr[15]
        );
    } else {
        return new THREE.Matrix4(
            arr[0],  arr[1],  arr[2],  arr[3],
            arr[4],  arr[5],  arr[6],  arr[7],
            arr[8],  arr[9],  arr[10], arr[11],
            arr[12], arr[13], arr[14], arr[15]
        );
    }
};

ShapeBuilder.prototype.parseColor = function(hex) {
    var cval = parseInt(hex, 16);
    return (new THREE.Color()).setRGB(
        ((cval >>16) & 0xff) / 255,
        ((cval >>8) & 0xff) / 255,
        ((cval >>0) & 0xff) / 255
    );
};

ShapeBuilder.prototype.parseUnit = function(str) {
    var unit = str.split(" ")[0];
    var factor = parseFloat(str.split(" ")[1]);
    if (unit !== "mm") {
        console.log("Found non-MM unit: " + unit);
    }
    return factor;
};