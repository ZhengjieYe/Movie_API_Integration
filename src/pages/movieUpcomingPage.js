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
           addButtonTestName="add-to-watch-button--carousel"
          />
        }}
        action={(movie) => {
          return <AddToWatchListButton 
            movie={movie} 
            removeAlertAction={context.removeFromWatchlist} 
            addButtonAction={context.addToWatchList}
            addButtonTestName="add-to-watch-button"
          /> 
        }}
      />
  );
};

export default MovieListPage;