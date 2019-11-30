const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const plumber = require('gulp-plumber')
const source = require( "vinyl-source-stream")
const buffer = require( "vinyl-buffer")
const browserify = require('browserify')
const connect = require('gulp-connect')

gulp.task('sass', async function(){
    gulp.src('src/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('src'))
        .pipe(connect.reload())
})

gulp.task('js', async () => {
    browserify({
      entries: 'src/app/scripts/index',
      debug: true
    })
    .bundle()
    .pipe(plumber())
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('src'))
    .pipe(connect.reload())
  });

  gulp.task('cleanCss', () => {
    return del([
        'src/style.css'
    ]);
});
gulp.task('cleanJs', () => {
    return del([
        'src/main.js'
    ]);
});

  gulp.task('watch', async () =>{
    gulp.watch('src/style.scss', gulp.series('cleanCss', 'sass'))
    gulp.watch('src/app/scripts/*.js', gulp.series('cleanJs', 'js'))
  })


  gulp.task('connect', function() {
    connect.server({
      root: 'src',
      livereload: true
    });
  });

  gulp.task('default', gulp.series( 'watch', 'connect'))

