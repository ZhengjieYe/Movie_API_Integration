import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slice/movieSlice';

export default configureStore({
  reducer: {
    movies: movieReducer,
  },
});
