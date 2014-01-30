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

function parseShells(xmlDoc) {
    var shells = xmlDoc.find('//shell');
    var shellFiles = [];
    _.each(shells, function(shell) {
        shellFiles.push(shell.attr('href').value());
    });
    return shellFiles;
}

function fetchShell(shellName, hrefBase, dir) {
    // Fetch the shell file
    var path = hrefBase + "/" + shellName;
    getFile(path, function(err, doc) {
        if (err) {
            console.log("Error reading file: " + path);
        } else {
            // Write the shell xml file to the file system
            path = dir + "/" + shellName;
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
        var shells = parseShells(xmlDoc);
        _.each(shells, function(shell) {
            fetchShell(shell, hrefBase, dir);
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

//fs.readFile(argv.f, function(err, doc) {
//});
