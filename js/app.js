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

function redrerCards() {
	const initialCardsItem = initialCards.map(addCards);
	cardsContainer.append(...initialCardsItem);
}

redrerCards();

// Добавить карточки из массива на страницу
function addCards(card) {
	const cardElement = cardsTemplate.cloneNode(true);
	const cardImage = cardElement.querySelector('.card__image');
	const cardTitle = cardElement.querySelector('.card__title');
	cardImage.src = card.src;
	cardImage.alt = card.alt;
	cardTitle.textContent = card.title;
	return cardElement;
}

// Форма добавления карточки
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

// Добавить и сохранить новую карточку на страницу
function addNewCardHandler(event) {
	event.preventDefault();
	const photoInputLink = document.querySelector('.photo-popup__input_type_link');
	const photoInputTitle = document.querySelector('.photo-popup__input_type_title');
	const inputLinkValue = photoInputLink.value;
	const inputTitleValue = photoInputTitle.value;
	const cardItem = addCards({ src: inputLinkValue, title: inputTitleValue });
	cardsContainer.prepend(cardItem);
	photoInputLink.value = '';
	photoInputTitle.value = '';
	closePhotoPopup();
}

// Поставить лайк
const likeBtn = document.querySelectorAll('.card__like-btn');

likeBtn.forEach(function (like) {
	like.addEventListener('click', () => {
		like.classList.toggle('.card__like-btn_active'); // если обратиться к likeBtn, то появляется ошибка
		console.log('clicked');
	});
	console.log(like);
});

// Почему при попытке повесить обработчик события появляется ошибка undefined?
// likeBtn.addEventListener('click', likeToggle); // изначально функция так называлась

// Более короткая запись через стрелочную функцию, 
// но я не понимаю, как ее вызвать в обработчике события, разобрался, уже не актуально
// likeBtn.forEach((like) => { like.classList.toggle('.card__like-btn_active') && console.log(like) });

// Такой метод решения предлагают в Интернете, тоже не пашет
// likeBtn.forEach((like) => {
// 	like.addEventListener('click', function () {
// 		likeBtn.classList.toggle('.card__like-btn_active');
// 	});
// });


AddPhotoBtn.addEventListener('click', showPhotoPopup);

photoPopupCloseBtn.addEventListener('click', closePhotoPopup);

photoPopupForm.addEventListener('submit', addNewCardHandler);