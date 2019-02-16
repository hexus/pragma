const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');


module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		pragma: './src/pragma.js',
		old: './src/old.js'
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/build/',
		library: '[name]',
		libraryExport: 'default',
		libraryTarget: 'umd'
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'node_modules')
		],
	},
	module: {
		rules: [
			{
				test: /\.tag$/,
				exclude: /node_modules/,
				use: [{
					loader: 'riot-tag-loader',
					options: {
						hot: false,
						type: 'es6'
						// riot-compiler options riot.js.org/guide/compiler/
					}
				}]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						sourceMaps: true
					}
				}]
			}
		]
	},
	optimization: {
		minimizer: [
			new MinifyPlugin()
		]
	},
	plugins: [
		new webpack.ProgressPlugin((percentage, message, ...args) => {
			console.info(
				Math.round(percentage * 1000) / 1000,
				message
			);
		}),
		new webpack.ProvidePlugin({
			'riot': 'riot'
		})
	]
};
