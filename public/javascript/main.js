/* G. Hemingway Copyright @2014
 * Primary RequireJS entry point
 */

"use strict";


/*************************************************************************/


require.config({
    baseUrl: "/javascript",
    paths: {
        jquery: "libs/jquery.min",
        jstree: "libs/jstree.min",
        underscore: 'libs/underscore-min',
        THREE: 'libs/three.min',
        TrackballControls: "libs/TrackballControls",
        dat: "libs/dat.gui.min"
    },
    shim: {
        jquery: {
            exports: "$"
        },
        jstree: {
            deps: ["jquery"]
        },
        underscore: {
            exports: "_"
        },
        THREE: {
            exports: "THREE"
        },
        TrackballControls: {
            deps: ["THREE"]
        },
        dat: {
            exports: "dat"
        }
    }
});

/*
  Primary application entry point
 */
requirejs(["cad"], function(CADjs) {
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }


    var cad = window.cadjs = new CADjs({
        viewContainer: "steptools-view",
        compassContainer: "steptools-compass",
        treeContainer: ".steptools-tree",
        downloadsContainer: ".steptools-downloads > ul"
    });
    cad.setupPage();
    // What resource do we want to load
    var resourceURL = getQueryVariable("resource_url");
    cad.load(resourceURL);
});