import React, { useEffect, createContext, useReducer } from "react";
import { getNowPlaying } from "../api/tmdb-api";
import {getMovies,addToDBFavorites,getFavorites,getUpcomingMovies,getWachlist,postWachlist,deleteWachlist} from '../api/movie-api';

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        nowplaying:[...state.nowplaying]
      };
    case "load":
      return { movies: action.payload.movies.map((m)=>
          action.payload.favoritesId.indexOf(m.id)!== -1? { ...m, favorite: true } : m
        ),
         upcoming: [...state.upcoming],nowplaying:[...state.nowplaying] };
    case "load-upcoming":
      return { 
        upcoming: action.payload.movies.map((u)=>
        action.payload.watchlistId.indexOf(u.id)!==-1 ? {...u, isInWatchList: true } : u
      ),
        movies: [...state.movies], nowplaying:[...state.nowplaying] };
    case "loadNowplay":
      return { movies: [...state.movies], upcoming: [...state.upcoming],nowplaying:action.payload.nowplaying } 
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        nowplaying:[...state.nowplaying]
      };
    case "add-watch":
      return {
        upcoming:state.upcoming.map((u)=>
          u.id === action.payload.upcoming.id ? {...u, isInWatchList: true } : u
        ),
        movies:[...state.movies],
        nowplaying:[...state.nowplaying]
      } 
    case "remove-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: false } : m
        ),
        upcoming: [...state.upcoming],
        nowplaying:[...state.nowplaying]
      }
    case "remove-watchlist":
      return {
        upcoming:state.upcoming.map((u)=>
          u.id === action.payload.upcoming.id ? {...u, isInWatchList: false } : u
        ),
        movies:[...state.movies],
        nowplaying:[...state.nowplaying]
      } 
      
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], nowplaying:[] });

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    postWachlist(movieId);
    dispatch({ type: "add-watch", payload: { upcoming: state.upcoming[index] } });
  }

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    addToDBFavorites(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const removeFromFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "remove-favorite", payload: { movie: state.movies[index] } });
  }
  const removeFromWatchlist = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    deleteWachlist(movieId);
    dispatch({ type: "remove-watchlist", payload: { upcoming: state.upcoming[index] } });
  }


  useEffect(() => {
    getFavorites().then(favorites=>{
      const favoritesId=favorites.map(f=>f.id);
      getMovies().then((movies) => {
        dispatch({ type: "load", payload: { movies,favoritesId } });
        dispatch({ payload: { movies } }); //run default case
      })
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNowPlaying().then((nowplaying) => {
      dispatch({ type: "loadNowplay", payload: { nowplaying } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getWachlist().then(res=>{
      const watchlist=res.watchlist;
      const watchlistId=watchlist.map(w=>w.id);
      
      getUpcomingMovies().then((movies) => {
        dispatch({ type: "load-upcoming", payload: { movies,watchlistId } });
      });
    })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        nowplaying: state.nowplaying,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList:addToWatchList,
        removeFromFavorites:removeFromFavorites,
        removeFromWatchlist:removeFromWatchlist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;