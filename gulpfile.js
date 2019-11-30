const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const source = require( "vinyl-source-stream")
const buffer = require( "vinyl-buffer")
const browserify = require('browserify')


gulp.task('sass', async function(){
    gulp.src('src/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('src'))
})

gulp.task('js', async () => {
    browserify({
      entries: 'src/app/scripts/index',
      debug: true
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('src'));
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


  gulp.task('default', gulp.series('js', 'sass'))

