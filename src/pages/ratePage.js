import React, { useEffect } from 'react';
import MovieList from '../components/movieList'
import {withRouter} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { loadMovies, loadSessionKey ,loadToken, loadRatedMovies } from '../reduxStore/slice/movieSlice'
import { getToken, getSession,postRating} from '../api/tmdb-api'
import RateButton from '../components/buttons/rateButton'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import bg_top from '../assets/img/bg_top.png'
import {getMovies,getRated,postRate} from '../api/movie-api'

const MovieReviewPage = (props) => {
    const movies=useSelector(state=>state.movies)
    const dispatch=useDispatch()
    const getStoreRated=()=>{
      getRated().then(res=>{
        dispatch(loadRatedMovies(res))
      })
    }

    useEffect(()=>{
        getMovies().then((res)=> {
          dispatch(loadMovies(res)) 
        })
        // if(movies.session_key===""){
        //   if(movies.token!==""){
        //     getSession(movies.token).then(res=>{
        //       dispatch(loadSessionKey(res.data.session_id));
        //     }).catch(err=>{
        //         window.location=`https://www.themoviedb.org/authenticate/${movies.token}`
        //     })
        //   }else{
        //     getToken().then(res=>{
        //       dispatch(loadToken(res.request_token))
        //     })
        //   }
        // }else{
        //   getStoreRated(movies.session_key);
        // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movies.token,movies.session_key])

    const handleRate=(id,value)=>{
      postRate(id,value).then(()=>{
        getStoreRated();
      });
    }
  return (
    <Container fluid>
      <Row>
        <Card className="bg-dark text-white">
          <Card.Img src={bg_top} alt="Card image" />
          <Card.ImgOverlay className="mt-5 pt-5 d-flex flex-column">
            <Card.Title className="mr-auto">Rating now!</Card.Title>
            <Card.Text>
              Try to rate the movies below!
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Row>
      <Row>
        <MovieList movies={movies.topRatedMovie} 
        action={(movie)=>{
          return <RateButton handleRate={handleRate} movie={movie}/>
        }}/>
      </Row>
    </Container>
  );
};

export default withRouter(MovieReviewPage);