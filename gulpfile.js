const ts = require("gulp-typescript");
const gulp = require("gulp");
//var concat = require('gulp-concat');

const tsProject = ts.createProject("tsconfig.json", { typescript: require("typescript") });

gulp.task("typescript", function() {
    return tsProject.src()
        .pipe(tsProject())
        //        .pipe(concat('app.js'))
        .pipe(gulp.dest("./dist"));
});

gulp.task("watch", function() {
    gulp.watch('src/**/*.ts', ["typescript"]);
});

gulp.task("default", ["watch"]);
