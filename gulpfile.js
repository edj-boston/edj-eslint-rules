'use strict';

const david      = require('gulp-david'),
    depcheck     = require('depcheck'),
    eslint       = require('gulp-eslint'),
    gulp         = require('gulp'),
    gulpDepcheck = require('gulp-depcheck'),
    rules        = require('./lib/rules'),
    sequence     = require('gulp-sequence');


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
gulp.task('david', () => {
    return gulp.src('package.json')
        .pipe(david());
});


// Check for unused deps with depcheck
gulp.task('depcheck', gulpDepcheck({
    specials : [
        depcheck.special['gulp-load-plugins']
    ]
}));


// Run tests and produce coverage
gulp.task('travis', done => {
    sequence('lint')(done);
});


// Task for local development
gulp.task('default', [ 'david', 'depcheck', 'lint' ], () => {
    gulp.watch([
        'lib/*',
        'test/*'
    ], [ 'lint' ]);
});
