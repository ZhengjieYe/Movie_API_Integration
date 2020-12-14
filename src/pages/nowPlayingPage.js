import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'

const NowPlayingPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying;
  return (
    <PageTemplate
      title='Now playing'
      movies={movies}
      carouselAction={(item) => {
      }}
      action={(movie) => {
      }}
    />
);
}

export default NowPlayingPage;