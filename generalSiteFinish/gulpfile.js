var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');

gulp.task('default', function () {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/*.js', ['useref']);
	gulp.watch('src/css/*.css', ['useref']);
	gulp.watch('src/*.+(html|php)', ['useref']);
	gulp.watch('src/img/**/*.+(png|jpg|gif|svg)', ['images']);
	gulp.watch('src/fonts/**/*', ['fonts']);
});


gulp.task('sass', () => {
    return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

gulp.task('useref', () => {
    return gulp.src('src/*.+(html|php)')
    .pipe(useref())
    .pipe(gulpif('*.css', cssnano()))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
	return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', () => {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', () => {
  return del.sync('dist');
});

gulp.task('cache:clear', (callback) => {
    return cache.clearAll(callback)
});