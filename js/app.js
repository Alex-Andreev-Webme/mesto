let modal = document.querySelector('.modal');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

// Показать модальное окно
let userEditBtn = document.querySelector('.profile__edit-btn');
userEditBtn.addEventListener('click', function () {
	modal.classList.add('modal_opened');
});

// Закрыть модальное окно
let formCloseBtn = document.querySelector('.modal__close-btn');
formCloseBtn.addEventListener('click', function () {
	modal.classList.remove('modal_opened');
});

// Редактировать профиль и сохранить результат
let formElement = document.querySelector('.modal__container');
let nameInput = document.querySelector('#userName');
let aboutInput = document.querySelector('#userAbout');

function formSubmitHandler(event) {
	event.preventDefault();
	profileName.textContent = nameInput.value;
	profileAbout.textContent = aboutInput.value;
	modal.classList.remove('modal_opened');
}

formElement.addEventListener('submit', formSubmitHandler);