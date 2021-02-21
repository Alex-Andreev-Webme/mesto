// Показываем ошибку при валидации
function showInputError(formEl, inputEl, errorMessage, inputErrorClass, errorClass) {
	inputEl.classList.add(inputErrorClass);
	const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
	errorEl.textContent = errorMessage;
	errorEl.classList.add(errorClass);
}

// Скрываем ошибку при валидации
function hideInputError(formEl, inputEl, inputErrorClass, errorClass) {
	inputEl.classList.remove(inputErrorClass);
	const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
	errorEl.textContent = '';
	inputEl.classList.remove(errorClass);
}

// Проверяем валидность полей
function checkInputValidity(formEl, inputEl, inputErrorClass, errorClass) {
	const isInputValid = inputEl.validity.valid;
	if (!isInputValid) {
		const errorMessage = inputEl.validationMessage;
		showInputError(formEl, inputEl, errorMessage, inputErrorClass, errorClass);
	} else {
		hideInputError(formEl, inputEl, inputErrorClass);
	}
}

// Переключаем класс у кнопки в зависимости от валидности полей
function disablePopupBtn(inputList, ButtonEl) {
	const hasNotValidInput = inputList.some(InputEl => !InputEl.validity.valid);
	if (hasNotValidInput) {
		ButtonEl.setAttribute('disabled', true);
	} else {
		ButtonEl.removeAttribute('disabled');
	}
}

// Устанавливаем обработчики на форму и на ее элементы
function setEventListeners(formEl, inputSelector, submitButtonSelector, inputErrorClass, errorClass) {
	formEl.addEventListener('submit', (event) => {
		event.preventDefault();
	});
	const inputList = Array.from(formEl.querySelectorAll(inputSelector));
	const ButtonEl = formEl.querySelector(submitButtonSelector);
	inputList.forEach(inputEl => {
		inputEl.addEventListener('input', () => {
			checkInputValidity(formEl, inputEl, inputErrorClass, errorClass);
			disablePopupBtn(inputList, ButtonEl);
		});
	});
	disablePopupBtn(inputList, ButtonEl);
}

// Включаем валидацию
const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inputErrorClass, errorClass }) => {
	const formList = Array.from(document.querySelectorAll(formSelector));
	formList.forEach((formEl) => {
		setEventListeners(formEl, inputSelector, submitButtonSelector, inputErrorClass, errorClass);
	});
}

// Объект с исходными классами и вызов функции включения валидации
enableValidation({
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-btn',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_visible',
});