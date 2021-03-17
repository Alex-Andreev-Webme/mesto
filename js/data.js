const initialCards = [
	{
		title: 'Ленские столбы',
		src: './images/card-lenskie-stolby.jpg',
		alt: 'Ленские столбы, Якутия'
	},
	{
		title: 'Рускеала',
		src: './images/card-ruskeala.jpg',
		alt: 'Мраморный каньон Рускеала, Карелия'
	},
	{
		title: 'Ординская пещера',
		src: './images/card-ordinskaya-peshera.jpg',
		alt: 'Ординская пещера, Пермский край'
	},
	{
		title: 'Вулкан Креницына',
		src: './images/card-vulkan-krenizyna.jpg',
		alt: 'Вулкан Креницына, Курильские острова'
	},
	{
		title: 'Кезенойам',
		src: './images/card-kezenoyam.jpg',
		alt: 'Озеро Кезенойам, Чечня'
	},
	{
		title: 'Сасык-Сиваш',
		src: './images/card-sasyk-sivash.jpg',
		alt: 'Розовое озеро Сасык - Сиваш, Крым'
	},
]

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-btn',
	inputErrorClass: 'popup__input_type_error',
	textErrorClass: 'popup__input-error_visible'
}

export { initialCards, validationConfig }