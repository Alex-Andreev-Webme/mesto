const profileEditBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.profile-popup');
const profilePopupCloseBtn = document.querySelector('.profile-popup__close-btn');
const profilePopupForm = document.querySelector('.profile-popup__form');
const profilePopupNameInput = document.querySelector('.profile-popup__input_type_name');
const profilePopupAboutInput = document.querySelector('.profile-popup__input_type_about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');


// Показать попап редактирования профиля
function showProfilePopup() {
	profilePopup.classList.add('profile-popup_opened');
	profilePopupNameInput.value = userName.textContent;
	profilePopupAboutInput.value = userAbout.textContent;
}

// Закрыть попап редактирования профиля
function closeProfilePopup() {
	profilePopup.classList.remove('profile-popup_opened');
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
		title: 'Озеро Кезенойам',
		src: './images/card-kezenoyam.jpg',
		alt: 'Озеро Кезенойам, Чечня',
	},
	{
		title: 'Озеро Сасык-Сиваш',
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
function getCards(card) {
	const cardElement = cardsTemplate.cloneNode(true);
	const cardImage = cardElement.querySelector('.card__image');
	const cardTitle = cardElement.querySelector('.card__title');
	cardImage.src = card.src;
	cardImage.alt = card.alt;
	cardTitle.textContent = card.title;
	const removeBtn = cardElement.querySelector('.card__remove-btn');
	const likeBtn = cardElement.querySelector('.card__like-btn');
	const galleryPopupOpenBtn = cardImage;
	const galleryPopupCloseBtn = document.querySelector('.gallery-popup__close-btn');
	removeBtn.addEventListener('click', removeCard);
	likeBtn.addEventListener('click', likeCard);
	galleryPopupOpenBtn.addEventListener('click', showGalleryPopup);
	galleryPopupCloseBtn.addEventListener('click', closeGalleryPopup);
	return cardElement;
}

function redrerCards() {
	const html = initialCards.map(getCards);
	cardsContainer.append(...html);
}

redrerCards();

// --- Показать/скрыть попап редактирования фотографий --- //
const AddPhotoBtn = document.querySelector('.profile__add-btn');
const photoPopup = document.querySelector('.photo-popup');
const photoPopupCloseBtn = document.querySelector('.photo-popup__close-btn');
const photoPopupForm = document.querySelector('.photo-popup__form');

function showPhotoPopup() {
	photoPopup.classList.add('photo-popup_opened');
}

function closePhotoPopup() {
	photoPopup.classList.remove('photo-popup_opened');
}

AddPhotoBtn.addEventListener('click', showPhotoPopup);

photoPopupCloseBtn.addEventListener('click', closePhotoPopup);

photoPopupForm.addEventListener('submit', addCardHandler);

// --- Добавить и сохранить новую карточку на страницу --- //
function addCardHandler(event) {
	event.preventDefault();
	const photoInputLink = document.querySelector('.photo-popup__input_type_link');
	const photoInputTitle = document.querySelector('.photo-popup__input_type_title');
	const inputLinkValue = photoInputLink.value;
	const inputTitleValue = photoInputTitle.value;
	const cardItem = getCards({ src: inputLinkValue, title: inputTitleValue });
	cardsContainer.prepend(cardItem);
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
const galleryPopup = document.querySelector('.gallery-popup');

function showGalleryPopup() {
	const targetItem = galleryPopup.classList.add('gallery-popup_opened');

}

function closeGalleryPopup() {
	const targetItem = galleryPopup.classList.remove('gallery-popup_opened');
}