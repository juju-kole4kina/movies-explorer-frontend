export default class Auth {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  createUser(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email, password })
    })
    .then((res) => this._checkResponse(res))
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
    .then((res) => this._checkResponse(res))
  }

  getCurrentUser() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then((res) => this._checkResponse(res))
  }

  loggout() {
    return fetch(`${this._url}/signout`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then((res) => this._checkResponse(res))
  }
}

export const auth = new Auth({
  url: 'https://api.movie-exp.kole4kina.nomoredomainsicu.ru',
  // url: 'http://localhost:3000',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'}
})