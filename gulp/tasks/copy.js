var gulp = require('gulp');

gulp.task('copy', ['browserify'],function(){
  gulp.src('./index.html')
    .pipe(gulp.dest('static-fileserver'));

 gulp.src('./build/bundle.css')
    .pipe(gulp.dest('static-fileserver/build/'));

 
 gulp.src('./build/bundle.js')
    .pipe(gulp.dest('static-fileserver/build/'));
});