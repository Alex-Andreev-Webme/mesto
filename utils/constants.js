const initialCards = [
	{
		title: 'Ленские столбы',
		src: './images/card-lenskie-stolby.jpg',
		alt: 'Ленские столбы, Якутия'
	},
	{
		title: 'Рускеала',
		src: './images/card-ruskeala.jpg',
		alt: 'Мраморный каньон Рускеала, Карелия'
	},
	{
		title: 'Ординская пещера',
		src: './images/card-ordinskaya-peshera.jpg',
		alt: 'Ординская пещера, Пермский край'
	},
	{
		title: 'Вулкан Креницына',
		src: './images/card-vulkan-krenizyna.jpg',
		alt: 'Вулкан Креницына, Курильские острова'
	},
	{
		title: 'Кезенойам',
		src: './images/card-kezenoyam.jpg',
		alt: 'Озеро Кезенойам, Чечня'
	},
	{
		title: 'Сасык-Сиваш',
		src: './images/card-sasyk-sivash.jpg',
		alt: 'Розовое озеро Сасык - Сиваш, Крым'
	},
]

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
// const profileName = '.profile__name'
const profileName = '123'
const profileAbout = '.profile__about'



export {
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
}