import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { excerpt } from "../../util";
import {getMovieReviews} from '../../api/movie-api'

export default ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movie.id).then(reviews => {
      setReviews(reviews);
    });
  },[]);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.author}</td>
                <td>{excerpt(r.content)}</td>
                <td>
                  {" "}
                  <Link
                    data-test="movie_reviews_link"
                    to={{
                        pathname:`/reviews/${r.id}`,
                        state:{
                            review:r,
                            movie:movie
                        }
                    }}
                  >
                    Full Review
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};