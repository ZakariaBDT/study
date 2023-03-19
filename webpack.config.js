const path = require('path');

const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	// add a custom entry point
	entry: {
		...defaultConfig.entry,
		index: path.resolve(process.cwd(), 'src', 'index.js'),
		// modules: {
		// 	...defaultConfig.entry.modules,
		// 	import: path.resolve(
		// 		process.cwd(),
		// 		'src',
		// 		'modules/module-export.js'
		// 	),
		// 	library: {
		// 		name: 'boilerplate',
		// 		type: 'window',
		// 	},
		// },
	},
	// add a custom output path
	output: {
		...defaultConfig.output,
		path: path.resolve(process.cwd(), 'build'),
	},
};
