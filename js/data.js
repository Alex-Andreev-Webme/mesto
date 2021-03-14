const initialCards = [
	{
		title: 'Рускеала',
		src: './images/card-ruskeala.jpg',
	},
	{
		title: 'Ординская пещера',
		src: './images/card-ordinskaya-peshera.jpg',
	},
	{
		title: 'Вулкан Креницына',
		src: './images/card-vulkan-krenizyna.jpg',
	},
	{
		title: 'Кезенойам',
		src: './images/card-kezenoyam.jpg',
	},
	{
		title: 'Сасык-Сиваш',
		src: './images/card-sasyk-sivash.jpg',
	},
	{
		title: 'Озеро Джека Лондона',
		src: './images/card-ozero_dzeka_londona.jpg',
	},
];

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-btn',
	inputErrorClass: 'popup__input_type_error',
	textErrorClass: 'popup__input-error_visible'
};

export { initialCards, validationConfig };