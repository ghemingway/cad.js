'use strict';

var path            = require('path'),
    gulp            = require('gulp'),
    gutil           = require("gulp-util"),
    webpack         = require('webpack'),
    webpackBuild    = require('gulp-webpack-build'),
    sass            = require('gulp-sass');


var src = './src/client',
    dst = './public/js',
    config = {
        progress: true
    },
    overrides = {};

/***************************************************************/

gulp.task('webpack', [], function(callback) {
    // run webpack
    return gulp.src('./webpack.config.js')
        .pipe(webpackBuild.init(config))
        .pipe(webpackBuild.props(overrides))
        .pipe(webpackBuild.run())
        .pipe(webpackBuild.format({
            version: false,
            timings: true
        }))
        .pipe(webpackBuild.failAfter({
            errors: true,
            warnings: true
        }));
});

gulp.task('watch', function() {
    gulp.watch(path.join('./src/client', '**/*.*')).on('change', function(event) {
        if (event.type === 'changed') {
            gulp.src(event.path, { base: path.resolve(src) })
                .pipe(webpackBuild.closest('./webpack.config.js'))
                .pipe(webpackBuild.init(config))
                .pipe(webpackBuild.props(overrides))
                .pipe(webpackBuild.watch(function(err, stats) {
                    gulp.src(this.path, { base: this.base })
                        .pipe(webpackBuild.proxy(err, stats))
                        .pipe(webpackBuild.format({
                            verbose: true,
                            version: false
                        }))
                        .pipe(webpackBuild.failAfter({
                            errors: true,
                            warnings: true
                        }));
                }));
        }
    });
});

gulp.task('sass', function () {
    gulp.src('./src/client/stylesheets/base.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['webpack']);