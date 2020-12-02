import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
      data-test="add-to-favorites-button"
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;