const gulp = require('gulp');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const nunjucksRender = require('gulp-nunjucks-render');
const tildeImporter = require('node-sass-tilde-importer');
const portfinder = require('portfinder');

portfinder.basePort = 3000;

gulp.task('server', () =>
  portfinder.getPortPromise()
    .then((foundPort) => {
      gulp.src('docs')
        .pipe(webserver({
          livereload: true,
          open: true,
          port: foundPort
        }))
    })
);

gulp.task('scss', () =>
  gulp.src('./scss/**/*.scss')
    .pipe(sass({ importer: tildeImporter }))
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
