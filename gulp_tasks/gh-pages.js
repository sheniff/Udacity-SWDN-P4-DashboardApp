const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('ghPages', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
