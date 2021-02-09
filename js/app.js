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
}

// Показать модальное окно при клике
profileEditBtn.addEventListener('click', showProfileModal);

// Скрыть модальное окно при клике
profileModalCloseBtn.addEventListener('click', closeProfileModal);

// Редактировать профиль и сохранить результат при клике
profileModal.addEventListener('submit', profileFormSubmitHandler);


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