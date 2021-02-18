const { environment } = require('@rails/webpacker');
const { merge } = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

// https://github.com/webpack/webpack/issues/6642
//environment.config.set('output.globalObject', 'this');

//======================= CONFIGURE DEFAULT LOADERS ==========================//
const cssOpts = { modules: { localIdentName: '[name]_[local]_[hash:hex:5]' } };

for (const name of ['sass', 'moduleSass']) {
	// resolve-url-loader must be used before sass-loader
	environment.loaders.get(name).use.splice(-1, 0, {
		loader: 'resolve-url-loader',
	});
}

module.exports = environment;
