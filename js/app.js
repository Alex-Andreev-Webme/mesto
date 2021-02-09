const profileModal = document.querySelector('.profile-modal');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileModalCloseBtn = document.querySelector('.profile-modal__close-btn');
const profileModalForm = document.querySelector('.profile-modal__form');
const profileModalNameInput = document.querySelector('.profile-modal__input_type_username');
const profileModalAboutInput = document.querySelector('.profile-modal__input_type_about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');


profileModalNameInput.value = userName.textContent;
profileModalAboutInput.value = userAbout.textContent;

// Показать модальное окно редактирования профиля
function showProfileModal() {
	profileModal.classList.add('profile-modal_opened');
}

// Закрыть модальное окно редактирования профиля
function closeProfileModal() {
	profileModal.classList.remove('profile-modal_opened');
}

// Обработчик формы редактирования профиля
function profileFormSubmitHandler(event) {
	event.preventDefault();
	userName.textContent = profileModalNameInput.value;
	userAbout.textContent = profileModalAboutInput.value;
	closeProfileModal();
	closePhotoModal();
}

// Показать модальное окно при клике
profileEditBtn.addEventListener('click', showProfileModal);

// Скрыть модальное окно при клике
profileModalCloseBtn.addEventListener('click', closeProfileModal);

// Редактировать профиль и сохранить результат при клике
profileModal.addEventListener('submit', profileFormSubmitHandler);


// ----- ПЯТЫЙ СПРИНТ ----- //

// Добавить карточки на страницу
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

const cardsEl = document.querySelector('.cards');
const templateEl = document.querySelector('.cards-template');

function renderCards() {
	const cardsHtml = initialCards.map(getCard);
	cardsEl.append(...cardsHtml);
}

function getCardHtml(card) {
	return `<article class="card">
	      	<button type="button" class="card__remove-btn elem-click"></button>
	      	<img src="${card.src}" alt="${card.alt}" class="card__image">
				<div class="card__action">
					<h2 class="card__title">${card.title}</h2>
					<button type="button" class="card__like-btn elem-click"></button>
				</div>
			</article>`
}

function getCard(card) {
	const newCard = templateEl.content.cloneNode(true);
	const photoEl = newCard.querySelector('.card__image');
	const titleEl = newCard.querySelector('.card__title');
	photoEl.src = card.src;
	photoEl.alt = card.alt;
	titleEl.textContent = card.title;
	return newCard;
}

renderCards();

// Отрыть и закрыть попап при клике //
const photoModal = document.querySelector('.photo-modal');
const addPhotoBtn = document.querySelector('.profile__add-btn');
const closePhotoModalBtn = document.querySelector('.photo-modal__close-btn');
const photoModalForm = document.querySelector('.photo-modal__form');
const photoModalInputTitle = document.querySelector('.photo-modal__input_type_title');
const photoModalInputLink = document.querySelector('.photo-modal__input_type_link');
const photoModalSaveBtn = document.querySelector('.photo-modal__save-btn');

function showPhotoModal() {
	photoModal.classList.add('photo-modal_opened');
}

function closePhotoModal() {
	photoModal.classList.remove('photo-modal_opened');
}

function photoFormSubmitHandler(event) {
	event.preventDefault();
	closePhotoModal();
}

function addCard() {
	const inputTitleVal = photoModalInputTitle.value;
	const inputLinkVal = photoModalInputLink.value;
	const newCard = getCard({ title: inputTitleVal }, { src: inputLinkVal });
	cardsEl.prepend(newCard);
	// photoModalInputTitle.value = '';
	// photoModalInputLink.value = '';
}

addPhotoBtn.addEventListener('click', showPhotoModal);

closePhotoModalBtn.addEventListener('click', closePhotoModal);

photoModalForm.addEventListener('submit', photoFormSubmitHandler);

photoModalSaveBtn.addEventListener('click', addCard)