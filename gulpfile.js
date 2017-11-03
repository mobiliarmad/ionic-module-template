var inlineNg2Template = require('gulp-inline-ng2-template');
var gulp = require('gulp');
var del = require('del');

gulp.task('default', function () {

    var result = gulp.src('./src/**/*.ts')
        .pipe(inlineNg2Template({base: '.', useRelativePaths: true}));

    return result
        .pipe(gulp.dest('./tmp'));

});


