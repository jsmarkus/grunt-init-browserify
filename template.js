'use strict';

// Basic template description.
exports.description = 'Create Browserify project';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({

	}, [
		init.prompt('name'),
		init.prompt('version')
	], function(err, props) {

		props.devDependencies = {
			"browserify": "~2.34",
			"grunt-contrib-watch": "~0.5.3",
			"grunt-contrib-uglify": "~0.2.4",
			"grunt-contrib-connect": "~0.5.0",
			"grunt": "~0.4.1",
			"grunt-browserify": "~1.2.8"
		};


		var files = init.filesToCopy(props);

		init.copyAndProcess(files, props);

		init.writePackageJSON('package.json', props);

		done();
	});

};