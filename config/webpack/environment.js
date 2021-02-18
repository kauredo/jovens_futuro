const { environment } = require('@rails/webpacker');
const { merge } = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

// https://github.com/webpack/webpack/issues/6642
//environment.config.set('output.globalObject', 'this');

//======================= CONFIGURE DEFAULT LOADERS ==========================//
const cssOpts = { modules: { localIdentName: '[name]_[local]_[hash:hex:5]' } };

for (const name of ['moduleCss', 'moduleSass']) {
	const loader = environment.loaders
		.get(name)
		.use.find(e => e.loader === 'css-loader');
	loader.options = merge(loader.options, cssOpts);
}

for (const name of ['sass', 'moduleSass']) {
	// resolve-url-loader must be used before sass-loader
	environment.loaders.get(name).use.splice(-1, 0, {
		loader: 'resolve-url-loader',
	});
}

//================================ PLUGINS ===================================//

// HACK: Make sure that z-index transformation is not applied. See:
// https://github.com/rails/webpacker/pull/1673
environment.plugins.append(
	'OptimizeCSSAssets',
	new OptimizeCSSAssetsPlugin({
		cssProcessorOptions: {
			safe: true,
		},
	})
);

environment.plugins.append(
	'Provide',
	new webpack.ProvidePlugin({
		slick: ['slick-carousel', 'default'],
	})
);

module.exports = environment;
