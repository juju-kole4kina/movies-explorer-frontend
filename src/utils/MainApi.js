export default class MainApi {
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

  updateUserData(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email })
    })
    .then((res) => this._checkResponse(res))
  }

  createSaveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: 'https://api.nomoreparties.co' + data?.image?.url,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: 'https://api.nomoreparties.co' + data?.image?.formats?.thumbnail?.url,
        movieId: data.id,
      })
      .then((res) => this._checkResponse(res))
    })
  }

  getSaveMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then((res) => this._checkResponse(res))
  }

  deleteSaveMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
    .then((res) => this._checkResponse(res))
  }
}

export const mainApi = new MainApi({
  // url: 'https://api.movie-exp.kole4kina.nomoredomainsicu.ru',
  url: 'http://localhost:3000',
  headers: {'Content-Type': 'application/json'}
});