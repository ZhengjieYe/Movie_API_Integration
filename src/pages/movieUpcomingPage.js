import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'
import ComboButton from '../components/buttons/comboButton'

const MovieListPage = () => {
  const context = useContext(MoviesContext);

  const upcomingMovies = context.upcoming;

  return (
      <PageTemplate 
        title='Upcoming Movies'
        movies={upcomingMovies}
        carouselAction={(item) => {
          return <ComboButton
           item={item} 
           removeAlertAction={context.removeFromWatchlist} 
           addButtonAction={context.addToWatchList} 
           content="Watchlist"
          />
        }}
        action={(movie) => {
          return <AddToWatchListButton 
            movie={movie} 
            removeAlertAction={context.removeFromWatchlist} 
            addButtonAction={context.addToWatchList}
          /> 
        }}
      />
  );
};

export default MovieListPage;