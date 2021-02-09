const profileEditBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.profile-popup');
const profilePopupCloseBtn = document.querySelector('.profile-popup__close-btn');
const profilePopupForm = document.querySelector('.profile-popup__form');
const profilePopupNameInput = document.querySelector('.profile-popup__input_type_name');
const profilePopupAboutInput = document.querySelector('.profile-popup__input_type_about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

profilePopupNameInput.value = userName.textContent;
profilePopupAboutInput.value = userAbout.textContent;

// Показать попап редактирования профиля
function showProfilePopup() {
	profilePopup.classList.add('profile-popup_opened');
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

function photoSubmitHandler(event) {
	event.preventDefault();
	closePhotoPopup();
}

AddPhotoBtn.addEventListener('click', showPhotoPopup);

photoPopupCloseBtn.addEventListener('click', closePhotoPopup);

photoPopupForm.addEventListener('submit', photoSubmitHandler);