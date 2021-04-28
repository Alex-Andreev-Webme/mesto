import ESCAPE_KEY from '../utils/constants.js'

export default class Popup {
	constructor(popupSelector) {
		this._popupEl = document.querySelector(popupSelector)
		this.close = this.close.bind(this);
		this._handleEscClose = this._handleEscClose.bind(this);
	}

	open() {
		this._popupEl.classList.add('popup_opened')
		document.addEventListener('keydown', this._handleEscClose)
	}

	close() {
		this._popupEl.classList.remove('popup_opened')
		document.removeEventListener('keydown', this._handleEscClose)
	}

	_handleEscClose(event) {
		if (event.key === ESCAPE_KEY) {
			this.close()
		}
	}

	setEventListeners() {
		this._popupEl.addEventListener('mousedown', (event) => {
			if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-btn')) {
				this.close()
			}
		})
	}
}
