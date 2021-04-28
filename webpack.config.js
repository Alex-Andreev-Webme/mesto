const path = require('path') // Утилита, которая превращает относительный путь в абсолютный


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
	}
};