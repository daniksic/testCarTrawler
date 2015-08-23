var pluginOptions={
    pattern: ['gulp-*', 'gulp.*'], // the glob(s) to search for 
    config: './package.json', // where to find the plugins, by default searched up from process.cwd() 
    scope: ['dependencies', 'devDependencies', 'peerDependencies'], // which keys in the config to look within 
    replaceString: /^gulp(-|\.)/, // what to remove from the name of the module when adding it to the context 
    camelize: true, // if true, transforms hyphenated plugins names to camel case 
    lazy: false, // whether the plugins should be lazy loaded on demand 
    rename: {'gulp-typescript':'ts'} // a mapping of plugins to rename 
  };

var gulp = require('gulp'),
$ = require('gulp-load-plugins')(pluginOptions),
// gutil = require('gulp-util'),
// jshint = require('gulp-jshint'),
// jscs = require('gulp-jscs'),
ts = require('gulp-typescript'),
// less = require('gulp-less'),
// watch = require('gulp-watch'),
// tds = require('tds'),
uglify = require('gulp-uglify'),
filesize = require('gulp-filesize'),
angularTemplatecache = require('gulp-angular-templatecache'), //$.angularTemplatecache
minifyHtml = require('gulp-minify-html'),
series = require('stream-series')
;

gulp.task('default', ['build']);

gulp.task('build', ['tsbuild']);

var tsProject = ts.createProject('tsconfig.json');
gulp.task('tsbuild', function () {
  var result = series(
    gulp.src('app/**/*.service.ts'),
    gulp.src('app/**/*.module.ts'),
    gulp.src('app/**/*.core.ts'),
    gulp.src('app/**/*.controller.ts'),
    gulp.src('app/**/*.config.ts'),
    gulp.src('app/**/*.startup.ts')
  )
    .pipe(ts(tsProject));
  return result.js
  .pipe(uglify())
  .pipe(gulp.dest('client/'))
  // .pipe(filesize())
  ;
});

gulp.task('templatecache', function(){
  return gulp.src('app/**/*.tmpl.html')
        .pipe(minifyHtml({empty:true}))
        .pipe(angularTemplatecache('ct.tmpl.js', {standalone:false, module:'ct', root:'app/'}))
        .pipe(gulp.dest('client/'));
  
});

gulp.task('lessbuild', function () {
  gulp.src('app/**/*.less')
      .pipe($.watch('app/**/*.less'))
      .pipe($.less())
      .pipe(gulp.dest('client/css'))
      .pipe($.filesize());
});

gulp.task('audit', function(){
  return gulp.src('app/**/*.js')
          .pipe($.jscs())
          .pipe($.jshint())
          .pipe($.jshint.reporter('jshint0stylish',{verbose:true}));
});