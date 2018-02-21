const gulp = require('gulp');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('server', () =>
  gulp.src('docs')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
);

gulp.task('scss', () =>
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./docs/css'))
);

gulp.task('scss:watch', () => gulp.watch('./scss/**/*.scss', ['scss']));

gulp.task('templates', () =>
    gulp.src('templates/**/index.html')
        .pipe(nunjucksRender({ path: ['templates/'] }))
        .pipe(gulp.dest('docs'))
);

gulp.task('templates:watch', () => gulp.watch('./templates/**/*.html', ['templates']));

gulp.task('default', ['templates', 'scss', 'scss:watch', 'templates:watch', 'server']);
