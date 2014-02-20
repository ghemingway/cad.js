/* G. Hemingway Copyright @2014
 * Asynchronous loading and parsing of CAD model information
 */

/*********************************************************************/

function processAssembly(url, workerID, data) {
    // All we really need to do is pass this back to the main thread
    var message = {
        type: "rootLoad",
        url: url,
        data: data,
        workerID: workerID
    };
    self.postMessage(message);
}

function processAnnotation(url, workerID, data) {
    var parts = url.split("/");
    // All we really need to do is pass this back to the main thread
    var message = {
        type: "annotationLoad",
        url: url,
        file: parts[parts.length - 1],
        data: data,
        workerID: workerID
    };
    self.postMessage(message);
}

/*********************************************************************/

function unfloat(val, precision) {
    var factor = Math.pow(10, precision);
    return val / factor;
}

function processShellXML(url, workerID, data) {
    var parts = url.split("/");
    // All we really need to do is pass this back to the main thread
    var message = {
        type: "shellLoad",
        url: url,
        file: parts[parts.length - 1],
        data: data,
        workerID: workerID
    };
    self.postMessage(message);
}

function unindexPoints(data, precision) {
    var numPoints = data.pointsIndex.length;
    data.points = [];
    for (var i = 0; i < numPoints; i++) {
        var value = unfloat(data.values[data.pointsIndex[i]], precision);
        data.points.push(value);
    }
    delete data.pointsIndex;
}

function unindexNormals(data, precision) {
    var numNormals = data.normalsIndex.length;
    data.normals = [];
    for (var i = 0; i < numNormals; i++) {
        var value = unfloat(data.values[data.normalsIndex[i]], precision);
        data.normals.push(value);
    }
    delete data.normalsIndex;
}

function unindexColors(data, precision) {
    var numColors = data.colorsIndex.length;
    data.colors = [];
    for (var i = 0; i < numColors; i++) {
        var value = unfloat(data.values[data.colorsIndex[i]], precision);
        data.colors.push(value);
    }
    delete data.colorsIndex;
}

function uncompressColors(data, precision) {
    data.colors = [];
    var numBlocks = data.colorsData.length;
    for (var i = 0; i < numBlocks; i++) {
        var block = data.colorsData[i];
        for (var j = 0; j < block.duration; j++) {
            data.colors.push(unfloat(data.values[block.data[0]], precision));
            data.colors.push(unfloat(data.values[block.data[1]], precision));
            data.colors.push(unfloat(data.values[block.data[2]], precision));
        }
    }
    delete data.colorsData;
}

function processShellJSON(url, workerID, data) {
    // Parse the JSON file
    var start = Date.now();
    var dataJSON = JSON.parse(data);
    var parseTime = (Date.now() - start) / 1000.0;
    var parts = url.split("/");
    self.postMessage({
        type: "parseComplete",
        file: parts[parts.length - 1],
        duration: parseTime
    });

    var precision = dataJSON.precision ? dataJSON.precision : 0;
    if (dataJSON.pointsIndex) {
        unindexPoints(dataJSON, precision);
    }
    if (dataJSON.normalsIndex) {
        unindexNormals(dataJSON, precision);
    }
    if (dataJSON.colorsIndex) {
        unindexColors(dataJSON, precision);
    }
    if (dataJSON.colorsData) {
        uncompressColors(dataJSON, precision);
    }

    // Just copy the data into arrays
    var buffers = {
        position: new Float32Array(dataJSON.points),
        normals: new Float32Array(dataJSON.normals),
        colors: new Float32Array(dataJSON.colors)
    };
    self.postMessage({
        type: "shellLoad",
        data: buffers,
        url: url,
        workerID: workerID,
        file: parts[parts.length - 1]
    }, [buffers.position.buffer, buffers.normals.buffer, buffers.colors.buffer]);
}

/*********************************************************************/


self.addEventListener("message", function(e) {
    // event is a new file to request and process
//    console.log("Worker " + e.data.workerID + ": " + e.data.url);
    // Get the request URL info
    var url = e.data.url;
    var workerID = e.data.workerID;
    var xhr = new XMLHttpRequest();

    // Determine data type
    var parts = url.split('.');
    var dataType = parts[parts.length-1].toLowerCase();
    parts = url.split("/");

    xhr.addEventListener("load", function() {
        // Handle 404 in loadend
        if (xhr.status === 404) return;
        self.postMessage({ type: "loadComplete", file: parts[parts.length - 1] });
        // What did we get back
        switch(e.data.type) {
            case "annotation":
                processAnnotation(url, workerID, xhr.responseText);
                break;
            case "shell":
                if (dataType === "xml") processShellXML(url, workerID, xhr.responseText);
                else processShellJSON(url, workerID, xhr.responseText);
                break;
            case "assembly":
                processAssembly(url, workerID, xhr.responseText);
                break;
            default:
                throw Error("DataLoader.webworker - Invalid request type: " + e.data.type);
                break;
        }
    });
    xhr.addEventListener("loadend", function() {
        if (xhr.status === 404) {
            self.postMessage({
                type: "loadError",
                url: url,
                file: parts[parts.length - 1],
                workerID: workerID
            });
        }
    });
    xhr.addEventListener("progress", function(event) {
        var message = { type: "loadProgress", file: parts[parts.length - 1] };
        if (event.lengthComputable) {
            message.loaded = event.loaded / event.total * 100.0;
        }
        self.postMessage(message);
    });

    xhr.open("GET", url, true);
    // Go get it
    try {
        xhr.send();
    } catch (ex) {
        console.log ("DataLoader.webworker - Error loading file: " + url);
    }
}, false);