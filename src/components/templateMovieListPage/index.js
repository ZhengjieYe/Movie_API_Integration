import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import FilterControls from "../filterControls";
import MovieCarouselShow from "../movieCarouselShow";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MovieListPageTemplate = ({movies, title, action, carouselAction}) => {

  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <MovieCarouselShow carouselAction={carouselAction} movies={displayedMovies} className="w-100"/>
      <Container fluid className="p-0">
      <Row noGutters={true}>
        <Col xs={{offset:1}}>
          <Header title={title} numMovies={displayedMovies.length} />
        </Col>
        <Col >
          <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>
        </Col>
      </Row>
    </Container>
      <MovieList
        action={action}
        movies={displayedMovies}
      ></MovieList>
    </>
  );
};

export default MovieListPageTemplate ;