const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const conf = require('../conf/gulp.conf');

gulp.task('styles', styles);
gulp.task('copy-bs-fonts', copyFonts);
gulp.task('fonts', gulp.series('copy-bs-fonts'), fonts)

function styles() {
  return gulp.src(conf.path.src('index.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded', includePaths: [conf.bootstrapDir + '/assets/stylesheets']})).on('error', conf.errorHandler('Sass'))
    .pipe(postcss([autoprefixer()])).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.path.tmp()))
    .pipe(browserSync.stream());
}

// fix to hard copy fonts from Bootstrap as they don't include their fonts in their bower.json file
function copyFonts() {
  return gulp.src(conf.bootstrapDir + '/assets/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(conf.paths.dist + '/fonts/'));
};

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
function fonts() {
  return gulp.src(conf.bootstrapDir)
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(conf.paths.dist + '/fonts/'));
};
