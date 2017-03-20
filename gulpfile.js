const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task('default', () => {
	exec('yarn dev', {cwd: './client'});
	exec('node server.js', {cwd: './server'});
});