/* G. Hemingway Copyright @2014
 * Asynchronous loading and parsing of CAD model information
 */

/*********************************************************************/

function processAssembly(url, workerID, data) {
    // All we really need to do is pass this back to the main thread
    self.postMessage({
        type: "rootLoad",
        url: url,
        data: data,
        workerID: workerID
    });
}

function processAnnotation(url, workerID, data) {
    var parts = url.split("/");
    // All we really need to do is pass this back to the main thread
    self.postMessage({
        type: "annotationLoad",
        url: url,
        file: parts[parts.length - 1],
        data: data,
        workerID: workerID
    });
}

function processShellXML(url, workerID, data) {
    var parts = url.split("/");
    // All we really need to do is pass this back to the main thread
    self.postMessage({
        type: "shellLoad",
        url: url,
        file: parts[parts.length - 1],
        data: data,
        workerID: workerID
    });
    // Signal that this worker is done
    self.postMessage({
        type: "workerFinish",
        workerID: workerID
    });
}

/*********************************************************************/

function unindexValues(data, buffers) {
    var numValues = data.pointsIndex.length;
    for (var i = 0; i < numValues; i++) {
        buffers.position[i] = data.values[data.pointsIndex[i]];
        buffers.normals[i] = data.values[data.normalsIndex[i]];
    }
    //delete data.pointsIndex;
    //delete data.normalsIndex;
}

function uncompressColors(data, colorsBuffer) {
    var index = 0;
    var numBlocks = data.colorsData.length;
    for (var i = 0; i < numBlocks; i++) {
        var block = data.colorsData[i];
        for (var j = 0; j < block.duration; j++) {
            colorsBuffer[index++] = block.data[0];
            colorsBuffer[index++] = block.data[1];
            colorsBuffer[index++] = block.data[2];
        }
    }
    //delete data.colorsData;
}

function processShellJSON(url, workerID, dataJSON, signalFinish) {
    // Just copy the data into arrays
    var buffers = {
        position: new Float32Array(dataJSON.pointsIndex.length),
        normals: new Float32Array(dataJSON.pointsIndex.length),
        colors: new Float32Array(dataJSON.pointsIndex.length)
    };

    if (dataJSON.values) {
        if (dataJSON.precision) {
            var factor = Math.pow(10, dataJSON.precision);
            var length = dataJSON.values.length;
            for (var i = 0; i < length; i++) {
                dataJSON.values[i] /= factor;
            }
        }
        unindexValues(dataJSON, buffers);
    }
    if (dataJSON.colorsData) {
        uncompressColors(dataJSON, buffers.colors);
    }

    var parts = url.split("/");
    self.postMessage({
        type: "shellLoad",
        data: buffers,
        id: dataJSON.id,
        workerID: workerID,
        file: parts[parts.length - 1]
    }, [buffers.position.buffer, buffers.normals.buffer, buffers.colors.buffer]);
    // Do we signal that we are all done
    if (signalFinish) {
        self.postMessage({
            type: "workerFinish",
            workerID: workerID
        });
    }
}

function processBatchJSON(url, workerID, data) {
    var dataJSON = JSON.parse(data);
    var parts = url.split("/");
    self.postMessage({
        type: "parseComplete",
        file: parts[parts.length - 1]
    });
    for (var i = 0; i < dataJSON.shells.length; i++) {
        processShellJSON(url, workerID, dataJSON.shells[i], false);
    }
    self.postMessage({
        type: "workerFinish",
        workerID: workerID
    });
}

/*********************************************************************/


self.addEventListener("message", function(e) {
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
                else {
                    // Parse the JSON file
                    var dataJSON = JSON.parse(xhr.responseText);
                    self.postMessage({
                        type: "parseComplete",
                        file: parts[parts.length - 1]
                    });
                    // Process the Shell data
                    processShellJSON(url, workerID, dataJSON, true);
                }
                break;
            case "batch":
                if (dataType === "xml") console.log("You can't batch XML fool!");
                else processBatchJSON(url, workerID, xhr.responseText);
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