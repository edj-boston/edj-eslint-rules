'use strict';

const depcheck = require('depcheck'),
    g          = require('gulp-load-plugins')(),
    gulp       = require('gulp'),
    rules      = require('./lib/rules');

// Lint as JS files (including this one)
gulp.task('lint', () => {
    const globs = [
        '*.js',
        'lib/*.js',
        'test/*.js',
        '!node_modules/**'
    ];

    return gulp.src(globs)
        .pipe(g.eslint({
            extends       : 'eslint:recommended',
            parserOptions : { ecmaVersion : 6 },
            rules
        }))
        .pipe(g.eslint.format())
        .pipe(g.eslint.failAfterError());
});


// Check deps with David service
gulp.task('david', () => {
    return gulp.src('package.json')
        .pipe(g.david());
});


// Check for unused deps with depcheck
gulp.task('depcheck', g.depcheck({
    specials : [
        depcheck.special['gulp-load-plugins']
    ]
}));


// Run tests and produce coverage
gulp.task('travis', done => {
    g.sequence('lint')(done);
});


// Task for local development
gulp.task('default', [ 'david', 'depcheck', 'lint' ], () => {
    gulp.watch([
        'lib/*',
        'test/*'
    ], [ 'lint' ]);
});
