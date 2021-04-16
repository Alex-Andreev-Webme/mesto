import {
	cardsContainer,
	initialCards,
	validationConfig,
	previewPopup,
	photoPopup,
	profilePopup,
	addCardBtn,
	profileEditBtn,
	profileName,
	profileAbout,
} from '../utils/constants.js'

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'


// const profileName = document.querySelector('.profile__name')
// const profileAbout = document.querySelector('.profile__about')
const photoPopupForm = document.querySelector('.popup__form_place_photo')
const profilePopupForm = document.querySelector('.popup__form')
const profilePopupNameInput = document.querySelector('.popup__input_type_name')
const profilePopupAboutInput = document.querySelector('.popup__input_type_about')
const photoInputLink = document.querySelector('.popup__input_type_link')
const photoInputTitle = document.querySelector('.popup__input_type_title')
const popups = document.querySelectorAll('.popup')


// Получаем актуальные данные профиля
// function getProfilePopup() {
// 	profilePopupNameInput.value = profileName.textContent
// 	profilePopupAboutInput.value = profileAbout.textContent
// }

// Обработчик формы редактирования профиля
// function profileSubmitHandler(event) {
// 	event.preventDefault();
// 	profileName.textContent = profilePopupNameInput.value.trim()
// 	profileAbout.textContent = profilePopupAboutInput.value.trim()
// 	closePopup(profilePopup)
// }

// profileEditBtn.addEventListener('click', () => {
// 	getProfilePopup()
// 	profileFormValidator.resetValidation()
// 	showPopup(profilePopup)
// });

// photoPopupForm.addEventListener('submit', addNewCard)

// profilePopupForm.addEventListener('submit', profileSubmitHandler)









// Добавление карточек из массива на страницу
const cardList = new Section(
	{
		data: initialCards,
		renderer: item => {
			const newCard = new Card(item, '.cards-template', previewImage)
			const cardEl = newCard.generateCard()
			cardList.addItem(cardEl)
		}
	}, cardsContainer)

function previewImage(src, title) {
	previewImagePopup.open(src, title)
}

const previewImagePopup = new PopupWithImage(previewPopup)

const addCardPopup = new PopupWithForm({
	popupSelector: photoPopup,
	handleFormSubmit: (formData) => {
		const newCard = new Card({
			title: formData['photo-name'],
			src: formData['photo-link']
		}, '.cards-template', previewImage)

		const cardEl = newCard.generateCard()
		cardList.addItem(cardEl)
		addCardPopup.close()
	}
})

addCardBtn.addEventListener('click', () => {
	photoFormValidator.resetValidation()
	addCardPopup.open()
});

const editProfilePopup = new PopupWithForm({
	popupSelector: profilePopup,
	handleFormSubmit: (formData) => {
		editProfilePopup.close()
	}

})

const userInfo = new UserInfo({
	name: '123',
	about: '321'
})

console.log(userInfo.name)

profileEditBtn.addEventListener('click', () => {
	userInfo.getUserInfo()
	photoFormValidator.resetValidation()
	editProfilePopup.open()
})

// Вешаем слушатели на попапы
previewImagePopup.setEventListeners()
addCardPopup.setEventListeners()
editProfilePopup.setEventListeners()

// Валидация попапа для редактирования профиля
const profileFormValidator = new FormValidator(validationConfig, profilePopupForm)
profileFormValidator.enableValidation()

// Валидация попапа для добавления новой карточки
const photoFormValidator = new FormValidator(validationConfig, photoPopupForm)
photoFormValidator.enableValidation()

cardList.renderItems()