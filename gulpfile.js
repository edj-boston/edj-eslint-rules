'use strict';

const david  = require('gulp-david'),
    eslint   = require('gulp-eslint'),
    gulp     = require('gulp'),
    rules    = require('./lib/rules'),
    sequence = require('gulp-sequence');


// Lint as JS files (including this one)
gulp.task('lint', () => {
    const globs = [
        '*.js',
        'lib/*.js',
        'test/*.js',
        '!node_modules/**'
    ];

    return gulp.src(globs)
        .pipe(eslint({
            extends       : 'eslint:recommended',
            parserOptions : { ecmaVersion : 6 },
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


// Run tests and produce coverage
gulp.task('travis', done => {
    sequence('lint')(done);
});


// Task for local development
gulp.task('default', [ 'deps', 'lint' ], () => {
    gulp.watch([
        'lib/*',
        'test/*'
    ], [ 'lint' ]);
});
