let modal = document.querySelector('.modal');
let modalCloseBtn = document.querySelector('.modal__close-btn');
let formElement = document.querySelector('.modal__form');
let nameInput = document.querySelector('.modal__input_type_username');
let aboutInput = document.querySelector('.modal__input_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let userEditBtn = document.querySelector('.profile__edit-btn');

// Показать модальное окно
function showModal() {
	modal.classList.add('modal_opened');
	nameInput.value = profileName.textContent;
	aboutInput.value = profileAbout.textContent;
}

// Закрыть модальное окно
function closeModal() {
	modal.classList.remove('modal_opened');
}

// Редактировать профиль и сохранить результат
function formSubmitHandler(event) {
	event.preventDefault();
	profileName.textContent = nameInput.value;
	profileAbout.textContent = aboutInput.value;
	closeModal();
}

// События
userEditBtn.addEventListener('click', function () {
	showModal();
});

modalCloseBtn.addEventListener('click', function () {
	closeModal();
});

formElement.addEventListener('submit', formSubmitHandler);