// Include gulp
var gulp = require('gulp'),
  // Include Our Plugins
  less = require('gulp-less'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  jquery = ('jquery'),
  jcarousel = ('jcarousel'),
  normalize = ('normalize.css');

gulp.task('css', function () {
  gulp
    .src('./less/main.less')
    .pipe(less({ strictMath: true }))
    .pipe(postcss([
      autoprefixer({ browsers: ['> 1%', 'IE 9', 'IE 10']})
    ]))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./less/**/*.less', ['css']);
});

gulp.task('scripts', function(){
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/jcarousel/dist/jquery.jcarousel.min.js'
    ])
  .pipe(gulp.dest('app/js'));
});

gulp.task('norm', function(){
  return gulp.src('node_modules/normalize.css/normalize.css')
  .pipe(gulp.dest('app/css'));
});

gulp.task('build', ['scripts', 'norm'], function(){
  var buildCss = gulp.src('app/css/**/*')
        .pipe(gulp.dest('dist/css')),
      buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts')),
      buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js')),
      buildImg = gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img')),
      buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css', 'watch']);
