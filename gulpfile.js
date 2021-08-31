const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// comile sass into css
function buildStyles() {
	return src('index.scss')
	       .pipe(sass()) // convert scss to css
				 .pipe(dest('css'))  // relative path
}

// watch source file change and run "buildStyles" automatically 
function watchTask() {
	watch(['index.scss'], buildStyles) 
}

// run function series
exports.default = series(buildStyles, watchTask)
