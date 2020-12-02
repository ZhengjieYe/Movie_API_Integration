import React from "react";
import { Link } from "react-router-dom";

const ReviewButton = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
          pathname: `/reviews/form`,
          state:{
              movie:movie
          }
      }}
      data-test="wirte-review-button"
    >
      Write a Review
    </Link>
  );
};

export default ReviewButton;