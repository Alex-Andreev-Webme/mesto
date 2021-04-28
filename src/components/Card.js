export default class Card {
	constructor(data, templateSelector, handleCardClick) {
		this._image = data.src
		this._alt = data.alt
		this._title = data.title
		this._templateSelector = templateSelector
		this._handleCardClick = handleCardClick
	}

	_getCard() {
		const cardEl = document.querySelector(this._templateSelector)
			.content
			.querySelector('.card')
			.cloneNode(true)

		return cardEl
	}

	generateCard() {
		this._element = this._getCard()
		this._setEventListeners()
		this._element.querySelector('.card__image').src = this._image
		this._element.querySelector('.card__image').alt = this._alt
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

		this._element.querySelector('.card__image').addEventListener('click', () => {
			this._handleCardClick(this._image, this._title)
		})
	}

	_removeCard() {
		this._element.style.transform = 'scale(0)'
		this._element.style.opacity = '0'
		setTimeout(() => {
			this._element.remove()
			this._element = null
		}, 1000);
	}

	_likeCard() {
		this._likeBtn.classList.toggle('card__like-btn_active')
	}
}