var gulp = require('gulp');
var stealTools = require('steal-tools');
var stealConfig = require('./config').steal;

/**
 * @description Sometimes plugins in gulp will hang and silently ignore errors, like `gulp-less`.
 * The `gulp-plumber` plugin helps work around broken streams.
 * This function eliminates the need of adding error handling to each task.
 * @type {gulp.src|*}
 */

gulp.task('steal', function () {
	return stealTools.build(stealConfig.buildConfig, stealConfig.buildOptions)
});