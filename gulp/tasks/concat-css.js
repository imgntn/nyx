var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('concat-css', function () {
  gulp.src('src/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('build/'));
});