const path = require('path'); // Утилита, которая превращает относительный путь в абсолютный
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Плагин для сборки html файлов
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Плагин для очищения содержимого директории dist

module.exports = {
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: ''
	},

	mode: "development",
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		compress: true,
		port: 8080,
		open: true
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),

		new CleanWebpackPlugin(),
	]
};