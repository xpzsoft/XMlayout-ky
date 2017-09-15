var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    uglify = require('gulp-uglify');
 
//定义一个testLess任务（自定义任务名称）
gulp.task('less', function () {
    gulp.src('less/**/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('css')); //将会在src/css下生成index.css
});

gulp.task('cssmin', ['less'], function(){
	gulp.src('css/**/*.css') 
        .pipe(cssmin()) 
        .pipe(gulp.dest('../plugs/self/css')); 
});

gulp.task('uglify', function(){
    gulp.src('js/xmlayout.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('../plugs/jquery-xmlayout'));

    gulp.src('js/self/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('../plugs/self/js'));
}); 
 
gulp.task('default',['cssmin', 'uglify']);
gulp.watch('less/**/*.less', ['cssmin']);
gulp.watch('js/**/*.js', ['uglify']);