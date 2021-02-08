const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const formElement = document.querySelector('.modal__form');
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
}

// Показать модальное окно при клике
userEditBtn.addEventListener('click', showModal);

// Скрыть модальное окно при клике
modalCloseBtn.addEventListener('click', closeModal);

// Редактировать профиль и сохранить результат при клике
formElement.addEventListener('submit', formSubmitHandler);