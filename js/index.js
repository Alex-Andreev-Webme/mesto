const profileEditBtn = document.querySelector('.profile__edit-btn');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const addPhotoBtn = document.querySelector('.profile__add-btn');
const profilePopup = document.querySelector('.popup_place_profile');
const photoPopup = document.querySelector('.popup_place_photo');
const galleryPopup = document.querySelector('.popup_place_gallery');
const popupCloseBtns = document.querySelectorAll('.popup__close-btn');
const profilePopupForm = document.querySelector('.popup__form');
const profilePopupNameInput = document.querySelector('.popup__input_type_name');
const profilePopupAboutInput = document.querySelector('.popup__input_type_about');
const photoInputLink = document.querySelector('.popup__input_type_link');
const photoInputTitle = document.querySelector('.popup__input_type_title');
const photoPopupForm = document.querySelector('.popup__form_place_photo');
const popups = document.querySelectorAll('.popup');

// Общая кнопка «крестик» для попапов
function closePopupOnCross(event) {
	const targetPopup = event.target.closest('.popup');
	closePopup(targetPopup);
}

// Открыть попап
function showPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupOnEscape);
}

// Закрыть попап
function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupOnEscape);
}

// Закрыть попап при клике на оверлей
function closePopupOnOverlay(event) {
	const targetOverlay = event.target;
	closePopup(targetOverlay);
}

// Закрыть попап при нажатии на escape
function closePopupOnEscape(event) {
	const escape = event.key === 'Escape';
	if (escape) {
		const openedPopup = document.querySelector('.popup_opened');
		closePopup(openedPopup);
	}
}

// Получаем актуальные данные профиля
function getProfilePopup() {
	showPopup(profilePopup);
	profilePopupNameInput.value = userName.textContent;
	profilePopupAboutInput.value = userAbout.textContent;
}

// Обработчик формы редактирования профиля
function profileSubmitHandler(event) {
	event.preventDefault();
	userName.textContent = profilePopupNameInput.value.trim();
	userAbout.textContent = profilePopupAboutInput.value.trim();
	closePopup(profilePopup);
}

// Обработчик формы добавления новой карточки на страницу
function addCardHandler(event) {
	event.preventDefault();
	const inputLinkValue = photoInputLink.value;
	const inputTitleValue = photoInputTitle.value;
	const cardItem = getCard({ src: inputLinkValue, title: inputTitleValue });
	addCard(cardItem);
	photoInputLink.value = '';
	photoInputTitle.value = '';
	closePopup(photoPopup);
}

// Попап галереи
function showGalleryPopup(event) {
	const targetEl = event.target;
	const targetItem = targetEl.closest('.card');
	const cardTitle = targetItem.querySelector('.card__title');
	const cardImage = targetItem.querySelector('.card__image');
	const galleryPopupTitle = document.querySelector('.popup__title_place_gallery');
	const galleryPopupImage = document.querySelector('.popup__image');
	galleryPopupTitle.textContent = cardTitle.textContent;
	galleryPopupImage.src = cardImage.src;
	showPopup(galleryPopup);
}

profileEditBtn.addEventListener('click', getProfilePopup);

addPhotoBtn.addEventListener('click', () => showPopup(photoPopup));

popupCloseBtns.forEach(button => button.addEventListener('click', closePopupOnCross));

popups.forEach(overlayEl => overlayEl.addEventListener('mousedown', closePopupOnOverlay));

photoPopupForm.addEventListener('submit', addCardHandler);

profilePopupForm.addEventListener('submit', profileSubmitHandler);

import Card from './Card.js'
import initialCards from './data.js'

// Добавление карточек на страницу
initialCards.forEach(item => {
	const card = new Card(item.src, item.title)
	const cardEl = card.generateCard()
	const cardsContainer = document.querySelector('.cards')
	cardsContainer.prepend(cardEl)
})