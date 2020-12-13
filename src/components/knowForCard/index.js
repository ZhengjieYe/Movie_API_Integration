import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import Card from 'react-bootstrap/Card'
import _ from 'lodash';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KnowForCard = ({movie}) => {
  return (
    <div className="col-sm-4 mb-3">
      <Card className="bg-dark">
        <Link to={`/movies/${movie.id}`}>
          <Card.Img
            className="center m-0 w-100"
            alt={movie.name}
            data-test="movie-card-img"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "./film-poster-placeholder.png"
            }
          />
          </Link>
          <Card.Body>
            <h6 className="text-center text-white pt-2" data-test="movie-card-title">{_.truncate(movie.name? movie.name:movie.title,{length:19})}</h6>
            <p className="text-white-50">
              <FontAwesomeIcon icon={["fas", "calendar"]} />
              <span> {movie.release_date}</span>
            </p>
            <p className="text-white-50">
              <FontAwesomeIcon icon={["fas", "star"]} />
              <span> {movie.vote_average}</span>
            </p>
          </Card.Body>
      </Card>
    </div>
  );
};

export default KnowForCard;