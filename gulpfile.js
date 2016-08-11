'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


var u_app='app/'; //app
var u_sass=u_app+'scss/'; //sass
var u_css=u_app+'css/'; //css
var u_js=u_app+'js/'; //js
var u_images=u_app+'images/'; //images

//sass编译
gulp.task('sass', function () {
    return gulp.src(u_sass+'**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(u_css))
        .pipe(reload({stream: true}));
});





// 监视文件改动并重新载入
gulp.task('serve',['sass'],function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch([u_app+'*.html', u_css+'**/*.css', u_js+'**/*.js'], reload);
    gulp.watch([u_sass+'**/*.scss'],['sass']);
});