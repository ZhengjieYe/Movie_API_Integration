import axios from 'axios'

export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovieBackdrops = async (movie_id) => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        return json.backdrops.length === 0 ?
          json.posters[0].flie_path:
          json.backdrops[0].file_path
      })
  }


  export const getToken=()=>{
    return fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      .then(res=>res.json())
  }

  export const getSession=(token)=>{
    return axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_TMDB_KEY}`,{
      request_token:token
    })
  }

  export const getTopRated=()=>{
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => json.results)
  }

  export const postRating=(id,session_key,value)=>{
    return axios.post(`https://api.themoviedb.org/3/movie/${id}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${session_key}`,{
      value:value
    },{
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
  }

  export const authentication=(user, pass, token)=>{
    return axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_TMDB_KEY}`,{
      username: user,
      password: pass,
      request_token: token
    })
  }

  export const getRated=(session_key)=>{
    return fetch(`https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&session_id=${session_key}&sort_by=created_at.asc&page=1`)
      .then(res=>res.json())
      .then(json=> json.results)
  }

    export const deleteSession=(session)=>{
      return axios.delete(`https://api.themoviedb.org/3/authentication/session?api_key=${process.env.REACT_APP_TMDB_KEY}`,{
        data:{
          session_id:session
        }
      })
    }