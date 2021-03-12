class Card {
	constructor(image, title) {
		this._image = image
		this._title = title
	}

	_getCard() {
		const cardEl = document
			.querySelector('.cards-template').content
			.querySelector('.card')
			.cloneNode(true)

		return cardEl

	}

	generateCard() {
		this._element = this._getCard()
		this._setEventListeners()
		this._element.querySelector('.card__image').src = this._image
		this._element.querySelector('.card__title').textContent = this._title

		return this._element
	}

	_setEventListeners() {
		this._element.querySelector('.card__remove-btn').addEventListener('click', () => {
			this._removeCard()
		})

		this._likeBtn = this._element.querySelector('.card__like-btn')
		this._likeBtn.addEventListener('click', () => {
			this._likeCard()
		})
	}

	_removeCard() {
		this._element.remove()
	}

	_likeCard() {
		this._likeBtn.classList.toggle('card__like-btn_active')
	}
}

export default Card