class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  setToken(jwt) {
    this._headers.authorization = `Bearer ${jwt}`;
  }
  
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => {
      if (!res.ok) {
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
  }

  renewUserInfo({name, about}) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({name: name, about: about})
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

  renewUserAvatar({avatar}) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({avatar: avatar})
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

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
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

  createNewCard({name, link}) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name, 
        link: link
      })
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

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
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
  
  likeCard({cardId, method}) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: method,
      headers: this._headers,
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
const api = new Api({
  url: '//api.kulch.students.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json'
  }
}); 

export default api;