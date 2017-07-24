
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass-main', function () {
  return gulp.src('./scss/main/main.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});  

gulp.task('sass-mercury', function () {
  return gulp.src('./scss/mercury/mercury.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass-venus', function () {
  return gulp.src('./scss/venus/venus.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});  

gulp.task('sass-earth', function () {
  return gulp.src('./scss/earth/earth.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass-mars', function () {
  return gulp.src('./scss/mars/mars.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});  

gulp.task('sass-jupiter', function () {
  return gulp.src('./scss/jupiter/jupiter.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass-saturn', function () {
  return gulp.src('./scss/saturn/saturn.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});  

gulp.task('sass-uranus', function () {
  return gulp.src('./scss/uranus/uranus.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass-neptune', function () {
  return gulp.src('./scss/neptune/neptune.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});  

gulp.task('sass-pluto', function () {
  return gulp.src('./scss/pluto/pluto.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass-main','sass-mercury','sass-venus','sass-earth','sass-mars'
  ,'sass-jupiter','sass-saturn','sass-uranus','sass-neptune','sass-pluto']);
});  