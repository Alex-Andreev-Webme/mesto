const profileEditBtn = document.querySelector('.profile__edit-btn');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const addPhotoBtn = document.querySelector('.profile__add-btn');
const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('.popup_place_profile');
const photoPopup = document.querySelector('.popup_place_photo');
const galleryPopup = document.querySelector('.popup_place_gallery');
const popupCloseBtns = document.querySelectorAll('.popup__close-btn');
const profilePopupForm = document.querySelector('.popup__form');
const profilePopupNameInput = document.querySelector('.popup__input_type_name');
const profilePopupAboutInput = document.querySelector('.popup__input_type_about');
const photoInputLink = document.querySelector('.popup__input_type_link');
const photoInputTitle = document.querySelector('.popup__input_type_title');
const galleryPopupTitle = document.querySelector('.popup__title_place_gallery');
const galleryPopupImage = document.querySelector('.popup__image');
const photoPopupForm = document.querySelector('.popup__form_place_photo');
const cardsContainer = document.querySelector('.cards'); // родительский блок для карточек
const cardsTemplate = document.querySelector('.cards-template').content; // содержание тега template

function closePopupClick(event) {
	const targetPopup = event.target.closest('.popup');
	closePopup(targetPopup);
}

function showPopup(popup) {
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

// Получаем актуальыне данные профиля
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
	galleryPopupTitle.textContent = cardTitle.textContent;
	galleryPopupImage.src = cardImage.src;
	showPopup(galleryPopup);
}

// Поставить лайк
function likeCard(event) {
	event.target.classList.toggle('card__like-btn_active');
}

// Удалить карточку
function removeCard(event) {
	const targetCard = event.target.closest('.card');
	targetCard.remove();
}

profileEditBtn.addEventListener('click', getProfilePopup);

addPhotoBtn.addEventListener('click', () => showPopup(photoPopup));

popupCloseBtns.forEach(button => button.addEventListener('click', closePopupClick));

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
	removeBtn.addEventListener('click', removeCard);
	likeBtn.addEventListener('click', likeCard);
	cardImage.addEventListener('click', showGalleryPopup);
	return cardElement;
}

// Вставляем карточки в соответствующий контейнер
function addCard(card) {
	cardsContainer.prepend(card);
}

// Добавляем отрендеренные карточки на страницу
initialCards.forEach(arrItem => addCard(getCard(arrItem)));