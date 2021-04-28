const path = require('path') // Утилита, которая превращает относительный путь в абсолютный


module.exports = {
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: ''
	}
}