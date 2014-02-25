// stream usage
// takes the same options as the parser
var fs = require("fs"),
    _ = require("underscore"),
    sax = require("sax")

/***********************************************************************/

var config = {
    indexPoints: true,
    indexNormals: true,
    indexColors: true,
    compressColors: true,
    roundPrecision: 2
};

var roundFloat = function(val, precision) {
    if (!precision) return val;
    var factor = Math.pow(10, precision);
    return Math.round(val * factor);// / factor;
};

/***********************************************************************/


/*************************************************************************/

function XMLTranslator() {
    this.parser = sax.createStream(true);
}

XMLTranslator.prototype.parse = function(dir, filename, callback) {
    var self = this;
    this.pathPrefix = dir + "/";
    var rootPath = this.pathPrefix + filename;

    this.parser.on("error", function (e) {
        // unhandled errors will throw, since this is a proper node
        // event emitter.
        console.error("error!", e);
        // clear the error
        this._parser.error = null;
        this._parser.resume()
    });

    this.parser.on("opentag", function (node) {
//        console.log(node);
    });

    this.parser.on("closetag", function(node) {
        console.log(node);
    });

// pipe is supported, and it's readable/writable
// same chunks coming in also go out.
    fs.createReadStream(rootPath)
        .pipe(self.parser);
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
});
