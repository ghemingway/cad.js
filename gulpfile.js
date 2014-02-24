var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rjs = require('gulp-requirejs');

gulp.task('build', function() {
    rjs({
        baseUrl: 'public/javascript',
        out: 'build.js',
        paths: {
            jquery:             'libs/jquery.min',
            jstree:             'libs/jstree.min',
            THREE:              'libs/three.min',
            underscore:         'libs/underscore-min',
            TrackballControls:  'libs/TrackballControls',
            dat:                'libs/dat.gui.min',
            VIS:                'libs/visualize'
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
            },
            VIS: {
                exports: "VIS",
                deps: ["jquery"]
            }
        },
        name: 'main'
    })
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascript/')); // pipe it to the output DIR
});

gulp.task('watch', function() {
    gulp.watch('./public/javascript/*.js', ['build']);
});

gulp.task('default', ['build']);