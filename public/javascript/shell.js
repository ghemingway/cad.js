/* G. Hemingway Copyright @2014
 * Shell class handles all of the actual geometry - shared between Shapes
 */

"use strict";


/********************************* Helper Functions ********************************/

function Shell (id, builder, assembly, parent) {
    var ret = builder.make(id, this, "shell");
    if (!ret) {
        var self = this;
        this.id = id;
        this.builder = builder;
        this.assembly = assembly;
        this.color = assembly.defaultColor;
        this.facets = [];
        this.isLoaded = false;
        var el = builder.getElement(id);
        var verts = el.getElementsByTagName("verts");
        this.size = parseInt(el.getAttribute("size"));
        if (verts.length > 0) {
            this.load(el);
        } else {
            this.boundingBox = builder.parseBoundingBox(el.getAttribute("bbox"));
            if (this.boundingBox.empty()) {
                console.log("Found empty bounding box: " + this.id);
            }
            this.href = el.getAttribute("href");
            builder.addLoadable(this.href, function(doc) {
                // Load the data from the source doc
                self.load(doc);
            });
        }
    }
    return ret;
}

Shell.prototype.getName = function() {
    return "Shell";
};

Shell.prototype.unloadData = function() {
    console.log("Shell.unloadData - Not Implemented");
};

Shell.prototype.getId = function() {
    return  this.id;
};

Shell.prototype.getCost = function() {
    return this.getFacetCount() * 3;
};

Shell.prototype.load = function(el) {
    this.dispatchEvent({ type: "shellStartLoad", shell: this });
    var color = el.getAttribute("color");
    this.color = color ? this.builder.parseColor(color) : this.color;

    // Load the points array
    var points = this.loadPoints(el);
    // Get all of the facet information ready
    var facets = el.getElementsByTagName("facets");
    var merge = true;
    // Load the facets and generate all of the Faces
    this.loadFacets(points, facets, merge);
    // Option: Build consolidated mesh
    this.mergeFacets();
    this.isLoaded = true;
    this.dispatchEvent({ type: "shellEndLoad", shell: this });
};

Shell.prototype.loadPoints = function(el) {
    // Load all of the point information
    var verts = el.getElementsByTagName("verts")[0].getElementsByTagName("v");
    var points = new Float32Array(verts.length * 3);
    var index = 0, pt, coords;
    for (var i = 0; i < verts.length; i++) {
        pt = verts[i].getAttribute("p");
        coords = pt.split(" ", 3);
        points[index++] = parseFloat(coords[0]);
        points[index++] = parseFloat(coords[1]);
        points[index++] = parseFloat(coords[2]);
    }
    return points;
};

Shell.prototype.loadFacets = function(points, facets, makeBuffers) {
    for (var i = 0; i < facets.length; i++) {
        var color = facets[i].getAttribute("color");
        var facetColor = color ? this.builder.parseColor(color) : this.color;
        var facet = new Facet(facets[i], facetColor, points, this.transform, makeBuffers);
        this.facets.push(facet);
    }
};

Shell.prototype.mergeFacets = function() {
    // Create the geometry to hold the data
    this.geometry = new THREE.BufferGeometry();
    this.geometry.addAttribute('position', Float32Array, this.size * 3, 3);
    this.geometry.addAttribute('normal',   Float32Array, this.size * 3, 3);
    this.geometry.addAttribute('color',    Float32Array, this.size * 3, 3);

    // Setup the offsets
    var chunkSize = 21845;
    var i;
    this.geometry.offsets = [];
    var offsets = this.size / chunkSize;
    for (i = 0; i < offsets; i++) {
        var offset = {
            start: i * chunkSize * 3,
            index: i * chunkSize * 3,
            count: Math.min( this.size - ( i * chunkSize ), chunkSize ) * 3
        };
        this.geometry.offsets.push( offset );
    }

    // Now load the rest of the data
    var position = this.geometry.attributes.position.array;
    var normals = this.geometry.attributes.normal.array;
    var colors = this.geometry.attributes.color.array;
    var pIndex = 0,
        nIndex = 0,
        cIndex = 0;
    _.each(this.facets, function(facet) {
        // Load the position data
        position.set(facet.points, pIndex);
        pIndex += facet.points.length;
        // Load the normal data
        normals.set(facet.normals, nIndex);
        nIndex += facet.normals.length;
        // Load the color data
        colors.set(facet.colors, cIndex);
        cIndex += facet.colors.length;
    });

    // Clear the facets - this will clear their buffers
    this.facets = [];
    this.geometry.computeBoundingBox();
    this.boundingBox = this.geometry.boundingBox.clone();
    this.geometry.normalizeNormals();
};

Shell.prototype.getDetails = function () {
    console.log("\tNumber of Tris: " + this.size);
    console.log("\tBounding Box: " + JSON.stringify(this.mesh.geometry.boundingBox));
    console.log("\tTransform: " + JSON.stringify(this.transform.elements));
    console.log("\tPoints: " + JSON.stringify(this.mesh.geometry.attributes.position.array.length));
    console.log("\tIndexes: " + JSON.stringify(this.mesh.geometry.attributes.index.array.length));
    console.log("\tNormals: " + JSON.stringify(this.mesh.geometry.attributes.normal.array.length));
    console.log("\tColors: " + JSON.stringify(this.mesh.geometry.attributes.color.array.length));
    console.log("\tGeometry Offsets: " + JSON.stringify(this.mesh.geometry.offsets));
    console.log("Shell.load Complete");
};

Shell.prototype.getBoundingBox = function() {
    return this.boundingBox;
};

Shell.prototype.getSize = function() {
    return this.size;
};

Shell.prototype.getGeometry = function() {
    return this.geometry;
};


/*******************************/


function Facet(el, color, points) {
    this.color = color;
    var tris = el.getElementsByTagName("f");
    var numValues = tris.length * 9;
    var i, indexVals, tmp, tri, norms, index0, index1, index2, normCoordinates;

    // One "f" is one triangle in the geometry
    this.points = new Float32Array(numValues);
    this.normals = new Float32Array(numValues);
    this.colors = new Float32Array(numValues);

    for (i = 0; i < tris.length; i++) {
        tri = tris[i];
        // Get the index information
        indexVals = tri.getAttribute("v").split(" ", 3);
        index0 = parseInt(indexVals[0]) * 3;
        index1 = parseInt(indexVals[1]) * 3;
        index2 = parseInt(indexVals[2]) * 3;

        tmp = i * 9;
        this.points[tmp++] = points[index0];
        this.points[tmp++] = points[index0 + 1];
        this.points[tmp++] = points[index0 + 2];
        this.points[tmp++] = points[index1];
        this.points[tmp++] = points[index1 + 1];
        this.points[tmp++] = points[index1 + 2];
        this.points[tmp++] = points[index2];
        this.points[tmp++] = points[index2 + 1];
        this.points[tmp]   = points[index2 + 2];

        // Get the normal information
        tmp = i * 9;
        norms = tri.getElementsByTagName("n");
        normCoordinates = norms[0].getAttribute("d").split(" ", 3);
        this.normals[tmp++] = parseFloat(normCoordinates[0]);
        this.normals[tmp++] = parseFloat(normCoordinates[1]);
        this.normals[tmp++] = parseFloat(normCoordinates[2]);
        normCoordinates = norms[1].getAttribute("d").split(" ", 3);
        this.normals[tmp++] = parseFloat(normCoordinates[0]);
        this.normals[tmp++] = parseFloat(normCoordinates[1]);
        this.normals[tmp++] = parseFloat(normCoordinates[2]);
        normCoordinates = norms[2].getAttribute("d").split(" ", 3);
        this.normals[tmp++] = parseFloat(normCoordinates[0]);
        this.normals[tmp++] = parseFloat(normCoordinates[1]);
        this.normals[tmp] = parseFloat(normCoordinates[2]);

        // Set the color information
        tmp = i * 9;
        this.colors[tmp++] = this.color.r;
        this.colors[tmp++] = this.color.g;
        this.colors[tmp++] = this.color.b;
        this.colors[tmp++] = this.color.r;
        this.colors[tmp++] = this.color.g;
        this.colors[tmp++] = this.color.b;
        this.colors[tmp++] = this.color.r;
        this.colors[tmp++] = this.color.g;
        this.colors[tmp]   = this.color.b;
    }
}

THREE.EventDispatcher.prototype.apply(Shell.prototype);