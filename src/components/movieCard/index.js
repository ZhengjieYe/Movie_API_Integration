import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import Card from 'react-bootstrap/Card'
import _ from 'lodash';
const MovieCard = ({movie, action}) => {

  return (
    <div className="col-sm-2 mb-3">
      <Card className="bg-dark">
        <div className="position-absolute m-0" style={{right:"0%",top:"0%"}}>
          {action(movie)}
        </div>
        <Link to={`/movies/${movie.id}`}>
          <Card.Img
            className="center m-0 w-100"
            alt={movie.title}
            data-test="movie-card-img"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "./film-poster-placeholder.png"
            }
          />
          </Link>
          <Card.Body>
            <h6 className="text-center text-white pt-2" data-test="movie-card-title">{_.truncate(movie.title,{length:19})}</h6>
          </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;