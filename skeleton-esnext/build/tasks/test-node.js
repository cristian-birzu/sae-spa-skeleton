var gulp = require('gulp');
var paths = require('../paths');
var to5 = require('gulp-babel');
var plumber = require('gulp-plumber');
var del = require('del');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean-test-node', function() {
  return del(paths.jasmineDist + '*');
});

// transpiles files in
// /test/unit/src/ from es6 to es5
// then copies them to test/unit/dist/
gulp.task('test-node', ['clean-test-node'], function() {
  return gulp.src(paths.jasmineSrc)
      .pipe(plumber())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(to5(assign({}, compilerOptions('commonjs'))))
      .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
      .pipe(gulp.dest(paths.jasmineDist));
});
