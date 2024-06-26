export default class MoviesApi {
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

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => this._checkResponse(res))
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co',
  headers: {'Content-Type': 'application/json'}
});