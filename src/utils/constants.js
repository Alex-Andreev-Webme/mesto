const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-btn',
	inputErrorClass: 'popup__input_type_error',
	textErrorClass: 'popup__input-error_visible'
}

const cardsContainer = '.cards'
const previewPopup = '.popup_place_gallery'
const photoPopup = '.popup_place_photo'
const profilePopup = '.popup_place_profile'
const addCardBtn = document.querySelector('.profile__add-btn')
const profileEditBtn = document.querySelector('.profile__edit-btn')
const profileName = '.profile__name'
const profileAbout = '.profile__about'
const profilePopupNameInput = document.querySelector('.popup__input_type_name')
const profilePopupAboutInput = document.querySelector('.popup__input_type_about')
const photoPopupForm = document.querySelector('.popup__form_place_photo')
const profilePopupForm = document.querySelector('.popup__form')
const ESCAPE_KEY = 'Escape'

export {
	cardsContainer,
	validationConfig,
	previewPopup,
	photoPopup,
	profilePopup,
	addCardBtn,
	profileEditBtn,
	profileName,
	profileAbout,
	profilePopupNameInput,
	profilePopupAboutInput,
	photoPopupForm,
	profilePopupForm,
}

export default ESCAPE_KEY