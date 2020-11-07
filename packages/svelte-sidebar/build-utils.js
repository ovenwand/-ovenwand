const sveltePreprocess = require('svelte-preprocess');

module.exports.svelteLoader = function svelteLoader(options = {}) {
	return {
		test: /\.(svelte|html)$/,
		use: {
			loader: 'svelte-loader',
			options: {
				preprocess: sveltePreprocess(),
				...options,
			},
		}
	};
}

module.exports.typescriptLoader = function typescriptLoader(options = {}) {
	return {
		test: /\.ts$/,
		use: {
			loader: 'ts-loader',
			options,
		},
	};
}
