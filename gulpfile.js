var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rjs = require('gulp-requirejs');

gulp.task('build', function() {
    rjs({
        name: 'main',
        baseUrl: 'javascript',
        out: 'build.js',
        paths: {
            jquery:             'libs/jquery.min',
            jqueryui:           'libs/jquery-ui.min',
            jstree:             'libs/jstree.min',
            underscore:         'libs/underscore-min',
            THREE:              'libs/three.min',
            TrackballControls:  'libs/TrackballControls',
            dat:                'libs/dat.gui.min',
            bigScreen:          'libs/bigscreen.min',
            VIS:                'libs/visualize',
            Velvety:            "shaders/VelvetyShader"
        },
        shim: {
            jquery: {
                exports: "$"
            },
            jqueryui: {
                deps: ['jquery']
            },
            jstree: {
                deps: ["jquery","jqueryui"]
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
                deps: ["jquery","jqueryui", "bigScreen"]
            },
            viewer: {
                deps: [
                    'libs/threejs/EffectComposer',
                    'libs/threejs/CopyShader',
                    'libs/threejs/FXAAShader',
                    'libs/threejs/SSAOShader',
                    'libs/threejs/RenderPass',
                    'libs/threejs/ShaderPass',
                    'libs/threejs/MaskPass'
                ]
            },
            'libs/threejs/EffectComposer': {
                deps: ['THREE']
            },
            'libs/threejs/CopyShader': {
                deps: ['THREE']
            },
            'libs/threejs/FXAAShader': {
                deps: ['THREE']
            },
            'libs/threejs/SSAOShader': {
                deps: ['THREE']
            },
            'libs/threejs/RenderPass': {
                deps: ['THREE']
            },
            'libs/threejs/ShaderPass': {
                deps: ['THREE', 'libs/threejs/RenderPass']
            },
            'libs/threejs/MaskPass': {
                deps: ['THREE']
            }
        }
    })
    .pipe(uglify())
    .pipe(gulp.dest('./javascript')); // pipe it to the output DIR
});

gulp.task('default', ['build']);
