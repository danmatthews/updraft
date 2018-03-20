"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var tailwindcss = require("tailwindcss");

gulp.task("styles", function() {
  return gulp
    .src("./scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([tailwindcss("./tailwind.js")]))
    .pipe(gulp.dest("./css"));
});

gulp.task("watch", function() {
  gulp.watch("./scss/**/*.scss", ["styles"]);
});
