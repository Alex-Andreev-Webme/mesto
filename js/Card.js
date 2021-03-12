class Card {
	constructor(item, showGalleryPopup) {
		this._image = item.src
		this._title = item.title
		this._alt = item.alt
		this._showGalleryPopup = showGalleryPopup
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
		this._element.querySelector('.card__image').atl = this._alt
		this._element.querySelector('.card__title').textContent = this._title

		return this._element
	}

	_setEventListeners() {
		const removeBtn = this._element.querySelector('.card__remove-btn')
		removeBtn.addEventListener('click', () => {
			this._removeCard()
		})

		this._likeBtn = this._element.querySelector('.card__like-btn')
		this._likeBtn.addEventListener('click', () => {
			this._likeCard()
		})

		this._cardImage = this._element.querySelector('.card__image')
		this._cardImage.addEventListener('click', (event) => {
			this._showGalleryPopup(event)
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