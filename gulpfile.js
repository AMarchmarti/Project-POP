var gulp = require('gulp')


gulp.task('watch', function(){
    gulp.watch('screens/index.html')
    gulp.watch('src/*.js')
})