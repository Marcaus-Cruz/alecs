const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	// context: path.resolve(__dirname, 'public'),
	entry: './public/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		// clean: true,
		// assetModuleFilename: '[file]',
		publicPath: '/',
	},
	// devServer: {
	// 	hot: true,
	// },
	// plugins: [
	// 	new webpack.ProvidePlugin({
	// 		$: 'jquery',
	// 	}),
	// 	new HtmlWebpackPlugin({
	// 		template: 'index.template.html',
	// 		hash: true,
	// 	}),
	// ],
	plugins: [
		new HtmlWebpackPlugin({
		  template: './public/index.html',
		}),
	  ],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.s?css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					// {
					// 	loader: 'postcss-loader',
					// 	options: { postcssOptions: { plugins: [['postcss-preset-env', {}]] } },
					// },
					// { loader: 'resolve-url-loader' },
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},
		],
	},
};
