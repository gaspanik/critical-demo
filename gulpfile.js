var gulp = require('gulp');
var critical = require('critical');

gulp.task('critical', function(cb) {
  critical.generate({
    base: '.',
    src: 'index.html',
    dest: 'css/main-critical.css',
    width: 320,
    height: 480,
    minify: true
  }, function(err, output) {
    critical.inline({
      base: '.',
      src: 'index.html',
      dest: 'index-critical.html',
      minify: true
    });
  });
});

gulp.task('default',['critical']);
