import React from "react";

export default ({ review }) => {
  return (
    <>
      <p data-test="movie_review_author">Review By: {review.author} </p>
      <p data-test="movie_review_content">{review.content} </p>
    </>
  );
};