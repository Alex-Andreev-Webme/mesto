export default class Section {
	constructor({ data, renderer }, containerSelector) {
		this._data = data
		this._renderer = renderer
		this._containerSelector = document.querySelector(containerSelector)
	}

	renderItems() {
		this._data.forEach(item => this._renderer(item))
	}

	addItem(element) {
		this._containerSelector.append(element)
	}
}