import gulp from 'gulp'
import plumber from 'gulp-plumber'
import touch from 'gulp-touch-cmd'
import sass from 'gulp-sass'

export const test = async () => {
  return gulp.src('./tests/style.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      functions: await import ('./src/sassa'),
    }))
    .pipe(gulp.dest('./tests'))
    .pipe(touch())
}

export const watch = () => {
  gulp.watch(['./src/**/*.(scss|js)', './tests/**/*.scss'], test)
}