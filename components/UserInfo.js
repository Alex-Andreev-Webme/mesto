export default class UserInfo {
	constructor({ userNameSelector, userAboutSelector }) {
		this._userName = document.querySelector(userNameSelector)
		this._userAbout = document.querySelector(userAboutSelector)
	}

	getUserInfo() {
		return {
			userName: this._userName.textContent,
			userAbout: this._userAbout.textContent
		}
	}

	setUserInfo({ userNameValue, userAboutValue }) {
		this._userName.textContent = userNameValue
		this._userAbout.textContent = userAboutValue
	}
}