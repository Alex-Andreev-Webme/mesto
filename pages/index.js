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
	profilePopupNameInput,
	profilePopupAboutInput,
	photoPopupForm,
	profilePopupForm,
} from '../utils/constants.js'

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

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

const previewImagePopup = new PopupWithImage(previewPopup)

function previewImage(src, title) {
	previewImagePopup.open(src, title)
}

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
		UserInfo.setUserInfo({
			userNameValue: formData['profile-name'],
			userAboutValue: formData['profile-about']
		});
		editProfilePopup.close()
	}
})

const userInfo = new UserInfo({
	userNameSelector: profileName,
	userAboutSelector: profileAbout
})

// Заполняем поля в попапе для редактирования профиля
const getProfileInfo = () => {
	const profileInfo = userInfo.getUserInfo()
	profilePopupNameInput.value = profileInfo.userName
	profilePopupAboutInput.value = profileInfo.userAbout
	profileFormValidator.resetValidation()
	editProfilePopup.open()
}

profileEditBtn.addEventListener('click', getProfileInfo)

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