export const login = (username, password) => {
  return fetch('/api/users/login', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const register = (username, password) => {
  return fetch('/api/users/register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const logout = (token) => {
  return fetch('/api/users/logout', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ token: token })
  }).then(res => res.json())
};

export const getMovies = (token) => {
  return fetch('/api/movies', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get'
  }).then(res => res.json())
};

export const addToDBFavorites = (id) => {
  return fetch('/api/users/favourites', {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('tmdb-token')
      },
      method: 'post',
      body: JSON.stringify({ id: id })
  }).then(res => {
    return res.json()
  })
};

export const getFavorites =async () => {
  return fetch('/api/users/favourites', {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('tmdb-token')
      },
      method: 'get'
  }).then(res => res.json())
};

export const getUpcomingMovies =async () => {
  return fetch('/api/upcoming', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get'
  }).then(res => res.json())
};