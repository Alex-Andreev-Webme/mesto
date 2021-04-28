export default class Popup {
	_ESCAPE = 'Escape'

	constructor(popupSelector) {
		this._popupEl = document.querySelector(popupSelector)
		this._closePopupBtn = this._popupEl.querySelector('.popup__close-btn')
		this.close = this.close.bind(this);
		this._handleEscClose = this._handleEscClose.bind(this);
		this._closePopupOnOverlay = this._closePopupOnOverlay.bind(this)
	}

	open() {
		this._popupEl.classList.add('popup_opened')
		this._popupEl.addEventListener('mousedown', this._closePopupOnOverlay)
		document.addEventListener('keydown', this._handleEscClose)
	}

	close() {
		this._popupEl.classList.remove('popup_opened')
		this._popupEl.removeEventListener('mousedown', this._closePopupOnOverlay)
		document.removeEventListener('keydown', this._handleEscClose)
	}

	_handleEscClose(event) {
		if (event.key === this._ESCAPE) {
			this.close()
		}
	}

	_closePopupOnOverlay(event) {
		if (event.target === event.currentTarget) {
			this.close()
		}
	}

	setEventListeners() {
		this._closePopupBtn.addEventListener('click', () => {
			this.close()
		})
	}
}
