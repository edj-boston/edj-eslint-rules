'use strict';

const david    = require('gulp-david'),
    eslint = require('gulp-eslint'),
    gulp     = require('gulp'),
    rules    = require('./lib/rules');


// Lint as JS files (including this one)
gulp.task('lint', () => {
    return gulp.src([
        '*.js',
        'lib/*.js',
        'test/*.js',
        '!node_modules/**'
    ])
    .pipe(eslint({
        extends : 'eslint:recommended',
        env     : { node : true, es6 : true, mocha : true },
        globals : { $ : true, window : true, document : true, ga : true },
        rules
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


// Check deps with David service
gulp.task('deps', () => {
    return gulp.src('package.json')
        .pipe(david());
});


// Task for local development
gulp.task('default', [ 'deps', 'lint' ], () => {
    gulp.watch([
        'lib/*',
        'test/*'
    ], [ 'lint' ]);
});
