const path = require('path');

module.exports = {
	mode: 'development',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'pragma.js',
		publicPath: '/build/',
		library: 'pragma',
		libraryExport: 'default',
		libraryTarget: 'umd'
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')
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
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};
