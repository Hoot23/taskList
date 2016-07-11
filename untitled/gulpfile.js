var gulp = require('gulp');
var serve = require('gulp-serve');

gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
    root: ['public', 'build'],
    port: 443,
    https: {
        key: 'path/to/cert.key',
        cert: 'path/to/cert.pem'
    },
    middleware: function(req, res) {
        // custom optional middleware 
    }
}));