import Popup from "./Popup.js"

export default class PopupWihtImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector)
	}

	open(link, title, alt) {
		super.open()
		const popupImg = this._popupEl.querySelector('.popup__image')
		const popupCaption = this._popupEl.querySelector('.popup__title_place_gallery')
		popupImg.src = link
		popupCaption.textContent = title
		popupImg.alt = alt
	}
}