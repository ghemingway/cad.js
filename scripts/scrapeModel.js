/* G. Hemingway Copyright @2014
 * Pull down all XML files related to one STEP model - per the STEPTOOLS defined XML spec.
 */

var fs = require("fs"),
    request = require("request"),
    _ = require("underscore"),
    mkdirp = require("mkdirp"),
    libxmljs= require("libxmljs");


/***********************************************************************/

function getFile(href, callback) {
    request(href, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(undefined, body);
        }
        else {
            callback(error);
        }
    });
}

function parsePath(xmlDoc, path) {
    return _.map(xmlDoc.find(path), function(shell) {
        return shell.attr('href').value()
    });
}

function fetchFile(fileName, hrefBase, dir) {
    // Fetch the file
    var path = hrefBase + "/" + fileName;
    getFile(path, function(err, doc) {
        if (err) {
            console.log("Error reading file: " + path);
        } else {
            // Write the xml file to the file system
            path = dir + "/" + fileName;
            fs.writeFile(path, doc, function(err) {
                if (err) throw err;
                console.log(path + " saved.");
            });
        }
    });
}

function processIndex(dir, hrefBase, doc) {
    try {
        var xmlDoc = libxmljs.parseXml(doc);
        // Write the xml file to the file system
        var path = dir + "/index.xml";
        fs.writeFile(path, doc, function(err) {
            if (err) throw err;
            console.log("Index saved");
        });
        // Get all of the shell data
        console.log("Reading " + xmlDoc.root().name());
        var shells = parsePath(xmlDoc, "//shell");
        console.log("Found Shells: " + shells.length);
        _.each(shells, function(shell) {
            fetchFile(shell, hrefBase, dir);
        });
        // Get all of the annotation data
        var annos = parsePath(xmlDoc, "//annotation");
        console.log("Found Annotations: " + annos.length);
        _.each(annos, function(anno) {
            fetchFile(anno, hrefBase, dir);
        });
    } catch(e) {
        console.log(e);
    }
}

// Set the base URL for future requests from the given URL
function setRequestBase(url) {
    var pattern = new RegExp("^(.*)/.*$");
    var m = pattern.exec(url);
    if (!m) {
        return "";
    }
    var base = m[1];
    if (base == ".") {
        return "";
    }
    if (!base.match(/\/$/)) {
        base += "/";
    }
    return base;
}

/***********************************************************************/

var argv = require('optimist')
        .demand(['h', 'd'])
        .argv;

// Make sure directory exists
mkdirp.sync(argv.d);
// Get the root index file
getFile(argv.h, function(err, doc) {
    if (err) {
        console.log("Error reading file");
    } else {
        var hrefBase = setRequestBase(argv.h);
        processIndex(argv.d, hrefBase, doc);
    }
});