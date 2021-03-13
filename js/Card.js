class Card {
	constructor(data) {
		this._image = data.src
		this._title = data.title
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

		this._element.querySelector('.card__image').addEventListener('click', () => {
			this._previewCardImage()
		})
	}

	_removeCard() {
		this._element.remove()
	}

	_likeCard() {
		this._likeBtn.classList.toggle('card__like-btn_active')
	}

	_previewCardImage() {
		const previewCardPopup = document.querySelector('.popup_place_gallery')
		const previewCardImage = document.querySelector('.popup__image')
		const previewCardTitle = document.querySelector('.popup__title_place_gallery')
		previewCardImage.src = this._image
		previewCardTitle.textContent = this._title
		previewCardPopup.classList.add('popup_opened')
	}
}

export default Card