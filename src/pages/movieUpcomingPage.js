import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  return (
      <PageTemplate 
        title='Upcoming Movies'
        movies={context.upcoming}
        action={(movie) => {
          return <AddToWatchListButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;