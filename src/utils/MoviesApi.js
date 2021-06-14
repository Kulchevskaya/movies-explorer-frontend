class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  getInitialFilms() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
  } 
}

// Апи - вызываем сервер
const apiMovies = new Api({
  url: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
}); 

export default apiMovies;