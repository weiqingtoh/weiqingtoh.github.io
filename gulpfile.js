var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./tasks', { recurse: true });

gulp.task('default', ['styles', 'imagemin', 'browserSync', 'watch']);
