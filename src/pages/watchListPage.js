import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import PlayButton from '../components/buttons/playBotton'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter(m=>m.isInWatchList);

  return (
      <PageTemplate
        title='WatchList:'
        movies={movies}
        carouselAction={(item) => {
            return <PlayButton />
        }}
        action={(movie) => {
        }}
      />
  );
};

export default MovieListPage;