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

export const getMovieReviews =async (id) => {
  return fetch(`/api/movies/${id}/reviews`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get'
  }).then(res => res.json())
    .then(json => json.reviews)
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

export const getWachlist =async () => {
  return fetch('/api/upcoming/watchlist', {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('tmdb-token')
      },
      method: 'get'
  }).then(res => res.json())
};

export const postWachlist =async (id) => {
  return fetch('/api/upcoming/watchlist', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('tmdb-token')
    },
    method: 'post',
    body: JSON.stringify({ id: id })
  }).then(res => res.json())
};

export const deleteWachlist =async (id) => {
  return fetch(`/api/upcoming/watchlist/${id}`, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('tmdb-token')
    },
    method: 'delete'
  }).then(res => res.json())
};

export const getNowPlaying =async () => {
  return fetch('/api/playing', {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'get'
  }).then(res => res.json())
    .then(json=>json.playingMovies);
};


export const getTopRated =async () => {
  return fetch('/api/topRated', {
      headers: {
          'Content-Type': 'application/json',
      },
      method: 'get'
  }).then(res => res.json())
};

export const getRated =async () => {
  return fetch('/api/rate', {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('tmdb-token')
      },
      method: 'get'
  }).then(res => res.json())
    .then(json=>json.ratedMovies)
};

export const postRate =async (id,rating) => {
  return fetch('/api/rate', {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('tmdb-token')
      },
      method: 'post',
      body: JSON.stringify({ id: id, rating:rating })
  }).then(res => res.json())
};

export const getPopularActors =async (sort,filter) => {
  return fetch(`/api/popular/actors?sort=${sort}&filter=${filter}`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get'
  }).then(res => res.json())
    .then(json=>json.actors)
};

export const getActorKnowFor =async (id) => {
  return fetch(`/api/popular/actors/${id}/known_for_movies`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get'
  }).then(res => res.json())
};

