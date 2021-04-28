const autoprefixer = require('autoprefixer'); // Вендорные префиксы
const cssnano = require('cssnano'); // Минификация css

module.exports = {
	plugins: [
		autoprefixer,
		cssnano({ preset: 'default' })
	]
};