'use strict';

// const fiber = require('fibers');
// const gulp = require('gulp');
// const sass = require('gulp-dart-sass');
// // const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');
// sass.compiler = require('sass'); //dart sass

// gulp.task('sass', function () {
// return gulp.src('./sass/**/*.scss')
// .pipe(sass().on('error', sass.logError))
// .pipe(sass({ // sass option
//       // fiber: fiber,
//       outputStyle: "expanded"
//     }))
// .pipe(autoprefixer({
//     // overrideBrowserslist: ['last 2 versions', "ie >= 11", "Android >= 4"],  //最後の2バージョンのブラウザを対象
//     cascade: false
//   }))
// .pipe(gulp.dest('./css'));
// });




import gulp from 'gulp';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

const sassCompile = function() {
  return gulp
  .src('./sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sass({ // sass option
        // fiber: fiber,
        outputStyle: "expanded"
      }))
  .pipe(postcss([
      autoprefixer({
        // browsers: [
        //     "last 2 versions", 
        //     "ie >= 11", 
        //     "Android >= 4"
        // ],
        cascade: false
      })
    ]))
  // .pipe(autoprefixer({
  //     // overrideBrowserslist: ['last 2 versions', "ie >= 11", "Android >= 4"],  //最後の2バージョンのブラウザを対象
  //     cascade: false
  //   }))
  .pipe(gulp.dest('./css'));
};




// export default(done) => {
//   sassCompile();
//   done();
// }


// gulp.task('sass', function () {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });



const { watch, series, parallel } = gulp;
gulp.task('sass-watch', function () {
  return gulp.watch('./sass/**/*.scss', series(sassCompile));
});





// gulp.task('default', gulp.parallel('sass-watch'));
// gulp.task('default', gulp.parallel('sass-watch', 'imagemin-watch'));

// // 画像圧縮
// const imagemin = require('gulp-imagemin');
// const mozjpeg = require('imagemin-mozjpeg');
// const pngquant = require('imagemin-pngquant');
// const changed = require('gulp-changed');

// gulp.task("imagemin", function () {
//   return gulp
//     .src('./images/base/**')
//     .pipe(changed('./images/'))
//     .pipe(
//       imagemin([
//         pngquant({
//           quality: [.60, .70], // 画質
//           speed: 1 // スピード
//         }),
//         mozjpeg({ quality: 65 }), // 画質
//         imagemin.svgo(),
//         imagemin.optipng(),
//         imagemin.gifsicle({ optimizationLevel: 3 }) // 圧縮率
//       ])
//     )
//     .pipe(gulp.dest('./images/'));
// });

// import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// 関数の定義
const ImgImagemin = function() {
  return gulp
  .src('./images/base/**') //タスクを実行するディレクトリを指定
    .pipe(imagemin())
    .pipe(gulp.dest("./images/")) // 出力先ディレクトリを指定
};
// 処理実行
// export default(done) => {
//   ImgImagemin();
//   done();
// }


// watch
gulp.task('imagemin-watch', function() {
 return gulp.watch('./images/base/**', series(ImgImagemin));
});

gulp.task('default', parallel('sass-watch', 'imagemin-watch'));


// watch
// gulp.task('imagemin-watch', function() {
// 	gulp.watch('./images/base/**', gulp.task('imagemin'));
// });

// 複数のタスクをwatch
// gulp.task('default', gulp.parallel('sass-watch', 'imagemin-watch'));






// 各処理メソッドを、gulpの中で読み込むのではなく、直接取り出す
// const {src, watch, dest, series} = require('gulp');
// const changed = require('gulp-changed');
// var sass = require('gulp-sass');

// // SassとCssの保存先を指定
// // gulpからの実行ではなく、処理自体を、変数に格納する
// const sassComp = () => {
//   return src('./sass/**/*.scss')
//     // 下記一行を追加
//     .pipe(changed('./sass/**/*.scss'))
//     .pipe(sass({outputStyle: 'expanded'}))
//     .pipe(dest('./css/'));
// };

// 自動監視のタスクを作成(sass-watchと名付ける) + コマンドから実行できるようにする
// exports['sass-watch'] = () => {
//   watch(['./sass/**/*.scss'], series(sassComp));
//   // watcher.on('change', function(event){});
// };

// gulp4以降では、下記のような処理は不要
// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
// gulp.task('default', ['sass-watch']);