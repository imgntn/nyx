var browserify   = require('browserify');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var hbsfy = require('hbsfy');

//the core bundle for our application 
gulp.task('browserify', function() {
   return browserify('./src/index.js',{
		      insertGlobals: true,
      		transform: ['hbsfy']
		})
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('build'));
});




