import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import ComboButton from '../components/buttons/comboButton'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies;

  return (
      <PageTemplate
        title='No. Movies'
        movies={movies}
        carouselAction={(item) => {
          return <ComboButton
           item={item} 
           removeAlertAction={context.removeFromFavorites} 
           addButtonAction={context.addToFavorites} 
           content="Favorites"
          />
        }}
        action={(movie) => {
          return <AddToFavoritesButton 
            movie={movie} 
            removeAlertAction={context.removeFromFavorites} 
            addButtonAction={context.addToFavorites}
          /> 
        }}
      />
  );
};

export default MovieListPage;