var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')({ lazy: true });
var sass = require('gulp-sass');
   // autoprefixer = require('gulp-autoprefixer'),
var browserSync = require('browser-sync').create();
var lite = require('lite-server');

var config = {
  build: './dist/build.js',
  plugins: [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js'
  ],
  index: {
    run: 'index.html',
    aot: 'index-aot.html',
    aotgz: 'index-aot-gzip.html',
    jit: 'index-jit.html'
  },
  dest: './dist',
  root: './',
  cssCompiled: './styles/compiled/',
  scssMain: './styles/main.scss',
};

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

//-------------- watch css -------------------------------------

gulp.task('watch-css', function() {
  gulp.watch(['styles/**/*.scss', '!styles/compiled/**/*.css'], ['css']);
});

gulp.task('css', function(done) {
	log('Compiling Sass to Css');

  return gulp.src(config.scssMain, {'name': 'css', 'verbose': true})
   .pipe(sass().on('error', sass.logError))
   //.pipe(autoprefixer({ browsers: ['last 2 versions', 'ie 10']  }))
   .pipe(gulp.dest(config.cssCompiled))
   .pipe(browserSync.reload({stream:true}));
});

gulp.task('clean-css', function(done) {
   // var files = config.cssCompiled + '**/*.css';
   // clean(files, done);
});

gulp.task('serve-css', ['watch-css'], function(done) {
    // attach browser sync to already existing port 8000
    browserSync.init({
      proxy: 'http://localhost:8000'
    });
});

//--------------------------------------------------------------

gulp.task('gzip', function () {
  log('gzipping');
  var source = [].concat(config.plugins, config.build);

  return gulp.src(source)
    .pipe($.gzip())
    .pipe(gulp.dest(config.dest));
});

gulp.task('copy-aot-gzip', ['gzip', 'clean'], function () {
  log('copy aot gzip');
  return copyIndex(config.index.aotgz);
});

gulp.task('copy-aot', ['clean'], function () {
  log('copy aot');
  return copyIndex(config.index.aot);
});

function copyIndex(source) {
  return gulp.src(source)
    .pipe($.rename(config.index.run))
    .pipe(gulp.dest(config.root));
}

gulp.task('copy-jit', ['clean'], function () {
  log('copy jit');
  return copyIndex(config.index.jit);
});

gulp.task('clean', function (done) {
  log('clean');
  del([config.index.run]).then(paths => {
    // console.log('Deleted files and folders:\n', paths.join('\n'));
    done()
  });
});

function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}

module.exports = gulp;
