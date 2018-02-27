const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require("open");
const sass = require('gulp-sass');
const nunjucksRender = require('gulp-nunjucks-render');
const tildeImporter = require('node-sass-tilde-importer');
const portfinder = require('portfinder');

portfinder.basePort = 3000;

gulp.task('server', () =>
  portfinder.getPortPromise()
    .then((foundPort) => {
      connect.server({
        root: ['docs'],
        port: foundPort,
        livereload: true,
      });
      open(`http://localhost:${foundPort}`);
    })
);

gulp.task('scss', () =>
  gulp.src('./scss/**/*.scss')
    .pipe(sass({ importer: tildeImporter }))
    .pipe(gulp.dest('./docs/css'))
    .pipe(connect.reload())
);

gulp.task('templates', () =>
    gulp.src('templates/**/index.html')
        .pipe(nunjucksRender({ path: ['templates/'] }))
        .pipe(gulp.dest('docs'))
        .pipe(connect.reload())
);

gulp.task('scss:watch', () => gulp.watch('./scss/**/*.scss', gulp.series('scss')));

gulp.task('templates:watch', () => gulp.watch('./templates/**/*.html', gulp.series('templates')));

gulp.task('dev', gulp.parallel('scss:watch', 'templates:watch', 'server'));

gulp.task('default', gulp.series('templates', 'scss', 'dev'));
