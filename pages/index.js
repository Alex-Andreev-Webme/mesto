import Card from '../components/Card.js'
import { initialCards, validationConfig, ESCAPE } from '../utils/constants.js'
import FormValidator from '../components/FormValidator.js'

const profileEditBtn = document.querySelector('.profile__edit-btn')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
const addPhotoBtn = document.querySelector('.profile__add-btn')
const profilePopup = document.querySelector('.popup_place_profile')
const photoPopup = document.querySelector('.popup_place_photo')
const photoPopupForm = document.querySelector('.popup__form_place_photo')
const popupCloseBtns = document.querySelectorAll('.popup__close-btn')
const profilePopupForm = document.querySelector('.popup__form')
const profilePopupNameInput = document.querySelector('.popup__input_type_name')
const profilePopupAboutInput = document.querySelector('.popup__input_type_about')
const photoInputLink = document.querySelector('.popup__input_type_link')
const photoInputTitle = document.querySelector('.popup__input_type_title')
const previewPopup = document.querySelector('.popup_place_gallery')
const previewPopupImage = previewPopup.querySelector('.popup__image')
const previewPopupTitle = previewPopup.querySelector('.popup__title_place_gallery')
const popups = document.querySelectorAll('.popup')
const cardsContainer = document.querySelector('.cards')

// Общая кнопка «крестик» для попапов
function closePopupOnCross(event) {
	const targetPopup = event.target.closest('.popup')
	closePopup(targetPopup)
}

// Открыть попап
function showPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupOnEscape)
}

// Закрыть попап
function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupOnEscape)
}

// Закрыть попап при клике на оверлей
function closePopupOnOverlay(event) {
	const targetOverlay = event.target
	closePopup(targetOverlay)
}

// Закрыть попап при нажатии на escape
function closePopupOnEscape(event) {
	if (event.key === ESCAPE) {
		const openedPopup = document.querySelector('.popup_opened')
		closePopup(openedPopup)
	}
}

// Получаем актуальные данные профиля
function getProfilePopup() {
	profilePopupNameInput.value = profileName.textContent
	profilePopupAboutInput.value = profileAbout.textContent
}

// Обработчик формы редактирования профиля
function profileSubmitHandler(event) {
	event.preventDefault();
	profileName.textContent = profilePopupNameInput.value.trim()
	profileAbout.textContent = profilePopupAboutInput.value.trim()
	closePopup(profilePopup)
}

// Возвращаем готовую карточку
function createCard(src, title) {
	const card = new Card({ src, title }, '.cards-template', previewCardImage)
	const cardEl = card.generateCard()
	return cardEl
}

// Обработчик формы добавления новой карточки на страницу
function addNewCard(event) {
	event.preventDefault()
	cardsContainer.prepend(createCard(photoInputLink.value, photoInputTitle.value))
	closePopup(photoPopup)
}

// Попап превью фото карточки
function previewCardImage(image, title) {
	previewPopupImage.src = image
	previewPopupTitle.textContent = title
	showPopup(previewPopup)
}

profileEditBtn.addEventListener('click', () => {
	getProfilePopup()
	profileFormValidator.resetValidation()
	showPopup(profilePopup)
});

addPhotoBtn.addEventListener('click', () => {
	photoPopupForm.reset()
	photoFormValidator.resetValidation()
	showPopup(photoPopup)
});

popupCloseBtns.forEach(button => button.addEventListener('click', closePopupOnCross))

popups.forEach(overlayEl => overlayEl.addEventListener('mousedown', closePopupOnOverlay))

photoPopupForm.addEventListener('submit', addNewCard)

profilePopupForm.addEventListener('submit', profileSubmitHandler)

// Добавление карточек на страницу
initialCards.forEach(item => {
	const cardEl = createCard(item.src, item.title)
	cardsContainer.append(cardEl)
})

// Валидация профиля
const profileFormValidator = new FormValidator(validationConfig, profilePopupForm)
profileFormValidator.enableValidation()

// Валидация фото
const photoFormValidator = new FormValidator(validationConfig, photoPopupForm)
photoFormValidator.enableValidation()