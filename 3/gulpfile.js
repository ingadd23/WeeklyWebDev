var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');

gulp.task('default', function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js/*.js', ['useref']);
	gulp.watch('app/css/*.css', ['useref']);
	gulp.watch('app/index.html', ['useref']);
	gulp.watch('app/images/**/*.+(png|jpg|gif|svg)', ['images']);
	gulp.watch('app/font/**/*', ['fonts']);
	
});


gulp.task('sass', function(){	
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
});



gulp.task('useref', function(){
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cssnano()))
		.pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/font/**/*')
  .pipe(gulp.dest('dist/font'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('cache:clear', function (callback) {
return cache.clearAll(callback)
});