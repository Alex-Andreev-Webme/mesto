class FormValidator {
	constructor(data, formEl) {
		this._formSelector = data.formSelector
		this._inputSelector = data.inputSelector
		this._inputSelector = data.inputSelector
		this._submitButtonSelector = data.submitButtonSelector
		this._inputErrorClass = data.inputErrorClass
		this._textErrorClass = data.textErrorClass
		this._formEl = formEl
	}

	_checkInputValidity() {
		const isInputValid = inputEl.validity.valid;
		if (!isInputValid) {
			const errorMessage = inputEl.validationMessage;
			showInputError(formEl, inputEl, errorMessage, inputErrorClass, textErrorClass);
		} else {
			hideInputError(formEl, inputEl, inputErrorClass);
		}
	}

	// Показываем ошибку при валидации
	_showInputError(inputEl, errorMessage) {
		inputEl.classList.add(this._inputErrorClass);
		const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
		errorEl.textContent = errorMessage;
		errorEl.classList.add(this._textErrorClass);
	}

	// Скрываем ошибку при валидации
	_hideInputError(inputEl) {
		inputEl.classList.remove(this._inputErrorClass);
		const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
		errorEl.textContent = '';
		inputEl.classList.remove(this._textErrorClass);
	}

	// Проверяем валидность полей
	_checkInputValidity(inputEl) {
		const isInputValid = inputEl.validity.valid;
		if (!isInputValid) {
			const errorMessage = inputEl.validationMessage;
			this._showInputError(inputEl, errorMessage);
		} else {
			this._hideInputError(inputEl);
		}
	}

	// Переключаем класс у кнопки в зависимости от валидности полей
	disablePopupBtn(inputList, ButtonEl) {
		const hasNotValidInput = inputList.some(InputEl => !InputEl.validity.valid);
		if (hasNotValidInput) {
			ButtonEl.setAttribute('disabled', true);
		} else {
			ButtonEl.removeAttribute('disabled');
		}
	}

	// Устанавливаем обработчики на форму и на ее элементы
	_setEventListeners() {
		this._formEl.addEventListener('submit', (event) => {
			event.preventDefault();
		});
		const inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
		const ButtonEl = this._formEl.querySelector(this._submitButtonSelector);
		inputList.forEach(inputEl => {
			inputEl.addEventListener('input', () => {
				this._checkInputValidity(inputEl);
				this.disablePopupBtn(inputList, ButtonEl);
			});
		});
		this.disablePopupBtn(inputList, ButtonEl);
	}

	enableValidation() {
		this._setEventListeners()
	}

}

export default FormValidator