export default class Api {
	constructor(options) {
		this._baseUrl = options.baseUrl
		this._headers = options.headers
	}

	getInitialCards() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: this._headers
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				// если ошибка, отклоняем промис
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}
}