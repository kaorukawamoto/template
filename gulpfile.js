var gulp = require("gulp");

var sass = require("gulp-sass");
  
gulp.task("sass", function () {
  gulp.src("./sass/**/*.scss") //入力元
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css")); //出力先
});

var browser = require("browser-sync");

gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("sass", function () {
  gulp.src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browser.reload({stream:true}))
});

gulp.task("default",["server"], function() {
  gulp.watch("./sass/**/*.scss",["sass"]);
});