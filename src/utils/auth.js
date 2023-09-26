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

  createUser(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
      })
      .then((res) => this._checkResponse(res))
    })
  }

  login(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
      .then((res) => this._checkResponse(res))
    })
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
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      credentials: 'include',
    })
    .then((res) => this._checkResponse(res))
  }
}

export const auth = new Auth({
  url: 'https://api.movie-exp.kole4kina.nomoredomainsicu.ru',
  headers: {'Content-Type': 'application/json'}
})