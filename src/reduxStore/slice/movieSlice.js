import { createSlice } from '@reduxjs/toolkit';
let token = sessionStorage.getItem('tmdb-token')?sessionStorage.getItem('tmdb-token'):""
let session = sessionStorage.getItem('tmdb-session')?sessionStorage.getItem('tmdb-session'):""
console.log(token,session);
export const slice = createSlice({
  name: 'movies',
  initialState: {
    topRatedMovie: [],
    token:token,
    session_key:session,
    ratedMovies:[]
  },
  reducers: {
    loadMovies: (state, action) => {
      state.topRatedMovie=[...action.payload]
    },
    loadToken: (state, action) =>{
      sessionStorage.setItem('tmdb-token', action.payload);
      state.token=action.payload;
    },
    loadSessionKey: (state, action) =>{
      sessionStorage.setItem('tmdb-session', action.payload);
      state.session_key=action.payload;
    },
    loadRatedMovies: (state, action) =>{
      state.ratedMovies=action.payload;
    },
    deleteBoth:(state)=>{
      state.session_key=""
      state.token=""
    }
    // decrement: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { loadMovies, loadToken, loadSessionKey, loadRatedMovies, deleteBoth } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.movies.topRatedMovie;

export default slice.reducer;
