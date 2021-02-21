// Показываем ошибку при валидации
function showInputError(formEl, inputEl, errorMessage) {
	inputEl.classList.add('popup__input_type_error');
	const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
	errorEl.textContent = errorMessage;
	errorEl.classList.add('popup__input-error_visible');
}

// Скрываем ошибку при валидации
function hideInputError(formEl, inputEl) {
	inputEl.classList.remove('popup__input_type_error');
	const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
	errorEl.textContent = '';
	inputEl.classList.remove('popup__input-error_visible');
}

// Проверяем валидность полей
function checkInputValidity(formEl, inputEl) {
	const isInputValid = inputEl.validity.valid;
	if (!isInputValid) {
		const errorMessage = inputEl.validationMessage;
		showInputError(formEl, inputEl, errorMessage);
	} else {
		hideInputError(formEl, inputEl);
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
function setEventListeners(formEl) {
	formEl.addEventListener('submit', (event) => {
		event.preventDefault();
	});
	const inputList = Array.from(formEl.querySelectorAll('.popup__input'));
	const ButtonEl = formEl.querySelector('.popup__save-btn');
	inputList.forEach(inputEl => {
		inputEl.addEventListener('input', () => {
			checkInputValidity(formEl, inputEl);
			disablePopupBtn(inputList, ButtonEl);
		});
	});
	disablePopupBtn(inputList, ButtonEl);
}

// Включение валидации всех форм
function enableValidation() {
	const formList = Array.from(document.querySelectorAll('.popup__form'));
	formList.forEach(setEventListeners);
}

enableValidation();