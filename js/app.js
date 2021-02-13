const profileEditBtn = document.querySelector('.profile__edit-btn');
const profilePopupCloseBtn = document.querySelector('.popup__close-btn');
const profilePopupForm = document.querySelector('.popup__form');
const profilePopupNameInput = document.querySelector('.popup__input_type_name');
const profilePopupAboutInput = document.querySelector('.popup__input_type_about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const galleryPopupCloseBtn = document.querySelector('.popup__close-btn_place_gallery');
const photoInputLink = document.querySelector('.popup__input_type_link');
const photoInputTitle = document.querySelector('.popup__input_type_title');
const galleryPopupTitle = document.querySelector('.popup__title_place_gallery');
const galleryPopupImage = document.querySelector('.popup__image');
const addPhotoBtn = document.querySelector('.profile__add-btn');
const photoPopupCloseBtn = document.querySelector('.popup__close-btn_place_photo');
const photoPopupForm = document.querySelector('.popup__form_place_photo');
const cardsContainer = document.querySelector('.cards'); // родительский блок для карточек
const cardsTemplate = document.querySelector('.cards-template').content; // содержание тега template
// Пишем общую функцию для всех попапов
const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('.popup_place_profile');
const photoPopup = document.querySelector('.popup_place_photo');
const galleryPopup = document.querySelector('.popup_place_gallery');

function showPopup(popup) {
	popup.classList.add('popup_opened');
	profilePopupNameInput.value = userName.textContent;
	profilePopupAboutInput.value = userAbout.textContent;
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

// Обработчик формы редактирования профиля
function profileSubmitHandler(event) {
	event.preventDefault();
	userName.textContent = profilePopupNameInput.value;
	userAbout.textContent = profilePopupAboutInput.value;
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
	galleryPopupTitle.textContent = cardTitle.textContent;
	galleryPopupImage.src = cardImage.src;
	showPopup(galleryPopup);
}

profileEditBtn.addEventListener('click', () => showPopup(profilePopup));

profilePopupCloseBtn.addEventListener('click', () => closePopup(profilePopup));

addPhotoBtn.addEventListener('click', () => showPopup(photoPopup));

photoPopupCloseBtn.addEventListener('click', () => closePopup(photoPopup));

galleryPopupCloseBtn.addEventListener('click', () => closePopup(galleryPopup));

// Поставить лайк
function likeCard(event) {
	event.target.classList.toggle('card__like-btn_active');
}

// Удалить карточку
function removeCard(event) {
	const targetItem = event.target.closest('.card');
	targetItem.remove();
}

photoPopupForm.addEventListener('submit', addCardHandler);

profilePopupForm.addEventListener('submit', profileSubmitHandler);

// Добавляем карточки из массива
function getCard(arrItem) {
	const cardElement = cardsTemplate.cloneNode(true);
	const cardImage = cardElement.querySelector('.card__image');
	const cardTitle = cardElement.querySelector('.card__title');
	cardImage.src = arrItem.src;
	cardImage.alt = arrItem.alt;
	cardTitle.textContent = arrItem.title;
	const removeBtn = cardElement.querySelector('.card__remove-btn');
	const likeBtn = cardElement.querySelector('.card__like-btn');
	const galleryPopupOpenBtn = cardImage;
	removeBtn.addEventListener('click', removeCard);
	likeBtn.addEventListener('click', likeCard);
	galleryPopupOpenBtn.addEventListener('click', showGalleryPopup);
	return cardElement;
}

function addCard(card) {
	cardsContainer.prepend(card);
}

// Добавляем отрендеренные карточки на страницу
initialCards.forEach(arrItem => addCard(getCard(arrItem)));