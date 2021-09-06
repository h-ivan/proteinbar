//npm install gulp gulp-sass gulp-postcss cssnano gulp-terser browser-sync

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask(){
    return src('scss/main.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('css', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask(){
    return src('main.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('js', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb){
    browsersync.init({
        server: {
            baseDir: '.'
        },
        ghostMode: false
    });
    cb();
}

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['scss/*.scss', '*.js'], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);