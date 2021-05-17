import './index.css'

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

// Формируем карточку
const getCard = (data) => {
	const newCard = new Card(
		data,
		'.cards-template',
		() => previewImagePopup.open(data.src, data.title)
	)

	return newCard.generateCard()
}

// Добавление карточек из массива на страницу
const cardList = new Section(
	{
		data: initialCards,
		renderer: (data) => {
			cardList.addItem(getCard(data))
		}
	}, cardsContainer)

const previewImagePopup = new PopupWithImage(previewPopup)

// Вставляем новую карточку через попап
const addCardPopup = new PopupWithForm({
	popupSelector: photoPopup,
	handleFormSubmit: (formData) => {
		cardList.addItem(getCard({
			title: formData['photo-name'],
			src: formData['photo-link']
		}))

		addCardPopup.close()
	}
})

addCardBtn.addEventListener('click', () => {
	photoFormValidator.resetValidation()
	addCardPopup.open()
});

// Редактирование профиля
const editProfilePopup = new PopupWithForm({
	popupSelector: profilePopup,
	handleFormSubmit: (formData) => {
		userInfo.setUserInfo({
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

// Проверяем, отвечает ли сервер на GET запрос
fetch('https://nomoreparties.co/v1/cohort-22/users/me', {
	headers: {
		authorization: '00f8d6a6-e259-4a54-8edc-d0e8df29b27e'
	}
})
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
	})