// Defining requirements
const gulp = require( 'gulp' );
const uglify = require( 'gulp-uglify' );
const rename = require('gulp-rename');
const watch = require( 'gulp-watch' );
const sass = require('gulp-sass')(require('sass'));
const cssnano = require( 'gulp-cssnano' );
const sourcemaps = require( 'gulp-sourcemaps' );
const autoprefixer = require( 'gulp-autoprefixer' );
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

// SASS/CSS Task
gulp.task('sass', async function(){
    return gulp.src([
        'src/css/owl-carousel.css',
        'src/css/nice-select.css',
        'src/css/bootstrap.css',
        'src/css/global.scss',
        'src/css/custom.scss',
        'src/css/header.scss',
        'src/css/theme-style.scss',
    ])
        .pipe(sourcemaps.init({loadMaps: true})) // Init Source Map
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(concat('theme-style.min.css')) // Name of the minified file
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css')) // Destination folder path
});
// JS/JavaScript Task
gulp.task('minify-js', function() {
    return gulp.src([
        'src/js/jquery.min.js',
        'src/js/owl.carousel.js',
        'src/js/jquery.nice-select.min.js',
        'src/js/custom.js'
    ]) // Path to your JS files
        .pipe(concat('theme.min.js')) // Name of the minified file
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')); // Destination folder for the minified files
});
// Watch the changes
gulp.task('watch', async function(){
    gulp.watch('src/css/*.scss', gulp.series('sass'));
    gulp.watch('src/js/*.js', gulp.series('minify-js'));
});