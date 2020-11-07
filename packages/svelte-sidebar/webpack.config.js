const webpack = require('webpack');
const path = require('path');
const { svelteLoader, typescriptLoader } = require('./build-utils');
const pkg = require('./package.json');

const projectRoot = path.resolve('../..');

const alias = {
	'svelte': path.resolve(projectRoot, 'node_modules', 'svelte'),
};

const extensions = ['.ts', '.mjs', '.js', '.json', '.svelte', '.html'];

const mainFields = ['svelte', 'module', 'main', 'browser'];

module.exports = {
	mode: 'development',

	devtool: process.env.NODE_ENV === 'development' && 'inline-source-map',

	entry: path.resolve('src', 'index.ts'),

	resolve: { alias, extensions, mainFields },

	externals: Object.keys(pkg.dependencies).concat('encoding'),

	plugins: [
		new webpack.DefinePlugin({
			'process.browser': true,
			'process.env.NODE_ENV': process.env.NODE_ENV,
		}),
	].filter(Boolean),

	module: {
		rules: [
			svelteLoader({
				dev: true,
				css: false,
				hydratable: true,
				hotReload: true,
			}),
			typescriptLoader(),
		],
	}
};