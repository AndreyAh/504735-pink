"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var imagemin = require('gulp-imagemin');
var webp = require("gulp-webp");

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

gulp.task('webp',() => {
    return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp())
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

// gulp.task("webp", function (){
//   return gulp.src("source/img/**/*.{png,jpg}")
//   .pipe(webp({quality: 90}))
//   .pipe(gulp.dest("source/img"))
// });

// gulp.task("images", function () {
//   return gulp.src("source/img/**/*.{png,jpg,svg}")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 3})]))
//     .pipe(gulp.dest("source/img-optim/"));
//   });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));
