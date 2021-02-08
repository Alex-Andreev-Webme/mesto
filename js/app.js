const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const modalForm = document.querySelector('.modal__form');
const nameInput = document.querySelector('.modal__input_type_username');
const aboutInput = document.querySelector('.modal__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const userEditBtn = document.querySelector('.profile__edit-btn');

nameInput.value = profileName.textContent;
aboutInput.value = profileAbout.textContent;

// Показать модальное окно редактирования профиля
function showModal() {
	modal.classList.add('modal_opened');
}

// Закрыть модальное окно редактирования профиля
function closeModal() {
	modal.classList.remove('modal_opened');
}

// Обработчик формы редактирования профиля
function formSubmitHandler(event) {
	event.preventDefault();
	profileName.textContent = nameInput.value;
	profileAbout.textContent = aboutInput.value;
	closeModal();
	closeModalPhoto();
}

// Показать модальное окно при клике
userEditBtn.addEventListener('click', showModal);

// Скрыть модальное окно при клике
modalCloseBtn.addEventListener('click', closeModal);

// Редактировать профиль и сохранить результат при клике
modalForm.addEventListener('submit', formSubmitHandler);



// ----- ПЯТЫЙ СПРИНТ ----- //


// ----- Отрыть и закрыть попап при клике //
const modalPhoto = document.querySelector('.modal-images');
const addPhotoBtn = document.querySelector('.profile__add-btn');
const closeModalPhotoBtn = document.querySelector('.modal-images__close-btn');
const modalPhotoForm = document.querySelector('.modal-images__form');

function showModalPhoto() {
	modalPhoto.classList.add('modal-images_opened');
}

function closeModalPhoto() {
	modalPhoto.classList.remove('modal-images_opened');
}

addPhotoBtn.addEventListener('click', showModalPhoto);

closeModalPhotoBtn.addEventListener('click', closeModalPhoto);

modalPhotoForm.addEventListener('submit', formSubmitHandler);
// ----- //

// Добавить карточки на страницу
const initialCards = [
	{
		name: 'Рускеала',
		link: './images/card-ruskeala.jpg'
	},
	{
		name: 'Ординская пещера',
		link: './images/card-ordinskaya-peshera.jpg'
	},
	{
		name: 'Вулкан Креницына',
		link: './images/card-vulkan-krenizyna.jpg'
	},
	{
		name: 'Озеро Кезенойам',
		link: './images/card-kezenoyam.jpg'
	},
	{
		name: 'Озеро Сасык-Сиваш',
		link: './images/card-sasyk-sivash.jpg'
	},
	{
		name: 'Озеро Джека Лондона',
		link: './images/card-ozero_dzeka_londona.jpg'
	},
];