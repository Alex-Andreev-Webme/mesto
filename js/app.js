const profileEditBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.popup');
const profilePopupCloseBtn = document.querySelector('.popup__close-btn');
const profilePopupForm = document.querySelector('.popup__form');
const profilePopupNameInput = document.querySelector('.popup__input_type_name');
const profilePopupAboutInput = document.querySelector('.popup__input_type_about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');


// Показать попап редактирования профиля
function showProfilePopup() {
	profilePopup.classList.add('popup_opened');
	profilePopupNameInput.value = userName.textContent;
	profilePopupAboutInput.value = userAbout.textContent;
}

// Закрыть попап редактирования профиля
function closeProfilePopup() {
	profilePopup.classList.remove('popup_opened');
}

// Обработчик формы редактирования профиля
function profileSubmitHandler(event) {
	event.preventDefault();
	userName.textContent = profilePopupNameInput.value;
	userAbout.textContent = profilePopupAboutInput.value;
	closeProfilePopup();
}

// Показать попап при клике
profileEditBtn.addEventListener('click', showProfilePopup);

// Скрыть попап при клике
profilePopupCloseBtn.addEventListener('click', closeProfilePopup);

// Редактировать профиль и сохранить результат
profilePopupForm.addEventListener('submit', profileSubmitHandler);


// ----- Пятый спринт ----- //

const initialCards = [
	{
		title: 'Рускеала',
		src: './images/card-ruskeala.jpg',
		alt: 'Мраморный каньон Рускеала, Карелия',
	},
	{
		title: 'Ординская пещера',
		src: './images/card-ordinskaya-peshera.jpg',
		alt: 'Ординская пещера, Пермский край',
	},
	{
		title: 'Вулкан Креницына',
		src: './images/card-vulkan-krenizyna.jpg',
		alt: 'Вулкан Креницына, Курильские острова',
	},
	{
		title: 'Кезенойам',
		src: './images/card-kezenoyam.jpg',
		alt: 'Озеро Кезенойам, Чечня',
	},
	{
		title: 'Сасык-Сиваш',
		src: './images/card-sasyk-sivash.jpg',
		alt: 'Розовое озеро Сасык - Сиваш, Крым',
	},
	{
		title: 'Озеро Джека Лондона',
		src: './images/card-ozero_dzeka_londona.jpg',
		alt: 'Озеро Джека Лондона, Магадан',
	},
];

const cardsContainer = document.querySelector('.cards'); // родительский блок для карточек
const cardsTemplate = document.querySelector('.cards-template').content; // содержание тега template

// --- Шесть карточек «из коробки» --- //
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
	const galleryPopupCloseBtn = document.querySelector('.popup__close-btn_place_gallery');
	removeBtn.addEventListener('click', removeCard);
	likeBtn.addEventListener('click', likeCard);
	galleryPopupOpenBtn.addEventListener('click', showGalleryPopup);
	galleryPopupCloseBtn.addEventListener('click', closeGalleryPopup);
	return cardElement;
}

// --- Тестируем --- //
function addCard(card) {
	cardsContainer.prepend(card);
}

// --- Показать/скрыть попап редактирования фотографий --- //
const AddPhotoBtn = document.querySelector('.profile__add-btn');
const photoPopup = document.querySelector('.popup_place_photo');
const photoPopupCloseBtn = document.querySelector('.popup__close-btn_place_photo');
const photoPopupForm = document.querySelector('.popup__form_place_photo');

function showPhotoPopup() {
	photoPopup.classList.add('popup_opened');
}

function closePhotoPopup() {
	photoPopup.classList.remove('popup_opened');
}

AddPhotoBtn.addEventListener('click', showPhotoPopup);

photoPopupCloseBtn.addEventListener('click', closePhotoPopup);

photoPopupForm.addEventListener('submit', addCardHandler);

// --- Добавить и сохранить новую карточку на странице --- //
function addCardHandler(event) {
	event.preventDefault();
	const photoInputLink = document.querySelector('.popup__input_type_link');
	const photoInputTitle = document.querySelector('.popup__input_type_title');
	const inputLinkValue = photoInputLink.value;
	const inputTitleValue = photoInputTitle.value;
	const cardItem = getCard({ src: inputLinkValue, title: inputTitleValue });
	addCard(cardItem);
	photoInputLink.value = '';
	photoInputTitle.value = '';
	closePhotoPopup();
}

// --- Поставить лайк --- //
function likeCard(event) {
	const targetEl = event.target;
	const targetItem = targetEl.classList.toggle('card__like-btn_active');
}

// --- Удалить карточку --- //
function removeCard(event) {
	const targetEl = event.target;
	const targetItem = targetEl.closest('.card');
	targetItem.remove();
}

// --- Показать/скрыть попап галереи --- //
const galleryPopup = document.querySelector('.popup_place_gallery');

function showGalleryPopup(event) {
	const popupOpened = galleryPopup.classList.add('popup_opened');
	const targetEl = event.target;
	const targetItem = targetEl.closest('.card');
	const cardTitle = targetItem.querySelector('.card__title');
	const galleryPopupTitle = document.querySelector('.popup__title_place_gallery');
	const galleryPopupImage = document.querySelector('.popup__image');
	const cardImage = targetItem.querySelector('.card__image');
	galleryPopupTitle.textContent = cardTitle.textContent;
	galleryPopupImage.src = cardImage.src;
}

function closeGalleryPopup() {
	const popupOpened = galleryPopup.classList.remove('popup_opened');
}

// --- Добавляем отрендеренные карточки на страницу --- //
initialCards.forEach(arrItem => addCard(getCard(arrItem)));