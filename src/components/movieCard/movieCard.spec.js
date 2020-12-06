import React from 'react'
import { mount } from 'cypress-react-unit-test'
import "./movieCard.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './index'
import { MemoryRouter } from "react-router";

describe('HelloWorld component', () => {

  let testMovie={};
  before(()=>{
    cy.request(`https://api.themoviedb.org/3/movie/531219?api_key=${Cypress.env("TMDB_KEY")}`)
    .its("body")
    .then((response)=>{
      testMovie=response;
      testMovie.poster_path="";
      console.log(testMovie);
    });
  })
  
  it('should show default picture when no picture path enter', () => {
    const testAction=()=>{};

    mount(
      <MemoryRouter initialEntries={["/"]}>
        <MovieCard movie={testMovie} action={testAction}/>
      </MemoryRouter>
      )

    cy.getBySel("movie-card-img").should("have.attr","src").should("eq","./film-poster-placeholder.png")
  })
})