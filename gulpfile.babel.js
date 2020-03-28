import gulp from 'gulp';
import gPug from 'gulp-pug';
import gWebserver from 'gulp-webserver';
import gImage from 'gulp-image';
import gSass from 'gulp-sass';
import gAutoprefixer from 'gulp-autoprefixer';
import gCsso from 'gulp-csso';
import gBro from 'gulp-bro';
import gGhPages from 'gulp-gh-pages';
import babelify from 'babelify';
import del from 'del';

gSass.compiler = require('node-sass');

const routes = {
  pug: { src: 'src/*.pug', dest: 'dist', watch: 'src/**/*.pug' },
  img: { src: 'src/img/*', dest: 'dist/img' },
  scss: { src: 'src/scss/style.scss', dest: 'dist/css', watch: 'src/scss/**/*.scss' },
  js: { src: 'src/js/main.js', dest: 'dist/js', watch: 'src/js/**/*.js' },
};

const pug = () =>
  gulp
    .src(routes.pug.src)
    .pipe(gPug())
    .pipe(gulp.dest(routes.pug.dest));

const image = () =>
  gulp
    .src(routes.img.src)
    .pipe(gImage())
    .pipe(gulp.dest(routes.img.dest));

const styles = () =>
  gulp
    .src(routes.scss.src)
    .pipe(gSass().on('error', gSass.logError))
    .pipe(gAutoprefixer())
    .pipe(gCsso())
    .pipe(gulp.dest(routes.scss.dest));

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      gBro({
        transform: [babelify.configure({ presets: ['@babel/preset-env'] }), ['uglifyify', { global: true }]],
      }),
    )
    .pipe(gulp.dest(routes.js.dest));

const clean = () => del(['dist', '.publish']);

const watch = () => {
  gulp.watch(routes.pug.watch, pug);
  gulp.watch(routes.img.src, image);
  gulp.watch(routes.scss.watch, styles);
  gulp.watch(routes.js.watch, js);
};

const webserver = () => gulp.src('dist').pipe(gWebserver({ livereload: true, open: true }));

const ghPages = () => gulp.src('dist/**/*').pipe(gGhPages());

const prepare = gulp.series([clean, image]);

const assets = gulp.series([pug, styles, js]);

const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
export const deploy = gulp.series([build, ghPages, clean]);
