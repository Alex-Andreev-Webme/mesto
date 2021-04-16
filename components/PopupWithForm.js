import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
	constructor({ popupSelector, handleFormSubmit }) {
		super(popupSelector)
		this._handleFormSubmit = handleFormSubmit
		this._formEl = this._popupEl.querySelector('.popup__form')
		this._formInputs = this._formEl.querySelectorAll('.popup__input')
	}

	// Здесь происходит какое-то безумие
	_getInputValues() {
		this._inputValues = {}
		this._formInputs.forEach(input => {
			this._inputValues[input.name] = input.value
		})

		return this._inputValues
	}

	setEventListeners() {
		super.setEventListeners()
		this._formEl.addEventListener('submit', (event) => {
			event.preventDefault()
			this._handleFormSubmit(this._getInputValues())
		})
	}

	close() {
		super.close()
		this._formEl.reset()
	}
}