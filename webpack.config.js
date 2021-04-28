const path = require('path')

module.exports = {
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: ''
	},
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		compress: true,
		port: 8080,

		open: true // сайт будет открываться сам при запуске npm run dev
	},
}