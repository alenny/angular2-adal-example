const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const shell = require("gulp-shell");
const tscConfig = require('./tsconfig.json');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('compile', shell.task([
    'npm run build'
]));

// copy dependencies
var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
];
var depFiles = [];
ngPackageNames.forEach(function (p) {
    depFiles.push('node_modules/@angular/' + p + '/' + p + '.umd.js');
});
depFiles = depFiles.concat([
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/**/*.js',
    // // below for angular2-cookie
    // 'node_modules/angular2-cookie/*.js',
    // 'node_modules/angular2-cookie/services/*.js',
    // 'node_modules/@angular/common/src/facade/lang.js',
    // 'node_modules/@angular/platform-browser/src/dom/dom_adapter.js',
    // 'node_modules/@angular/platform-browser/src/facade/lang.js',
    // below for adal
    'node_modules/adal-angular/**/*.js',
    // below for angular2-adal
    'node_modules/angular2-adal/**/*.js'
]);
gulp.task('copy:libs', ['clean'], function () {
    return gulp.src(depFiles, { base: './node_modules' })
        .pipe(gulp.dest('dist/lib'));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function () {
    return gulp.src([
        'src/**/*',
        '!src/**/*.ts'
    ], { base: './src' })
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['copy:libs', 'copy:assets']);
gulp.task('build', ['compile', 'copy']);
gulp.task('default', ['build']);