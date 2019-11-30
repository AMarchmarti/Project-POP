const gulp = require('gulp')
const sass = require('gulp-sass')
var exec = require('child_process').exec;

gulp.task('sass2Css', function(){
    gulp.src('src/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/styles'))
})

gulp.task('copy', function(){
    gulp.src(['src/*.html', 'src/*.ico'])
    .pipe(gulp.dest('build'))
    .pipe(gulp.src(['src/app/scripts/*.js', 'BBDD/*.js']))
    .pipe(gulp.dest('build/scripts'))
})

gulp.task('default', ['sass2Css', 'copy'], function(){
    gulp.exec('parcel build/index.html')
})

