import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const MovieListPage = () => {
  const context = useContext(MoviesContext);

  const upcomingMovies = context.upcoming.filter((u) => !u.isInWatchList)

  return (
      <PageTemplate 
        title='Upcoming Movies'
        movies={upcomingMovies}
        action={(movie) => {
          return <AddToWatchListButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;