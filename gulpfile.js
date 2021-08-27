'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
};

exports.styles = styles;
exports.watch = function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
};