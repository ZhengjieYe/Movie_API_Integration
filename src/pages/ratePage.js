import React, { useEffect } from 'react';
import MovieList from '../components/movieList'
import {withRouter} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { loadMovies, loadSessionKey ,loadToken, loadRatedMovies } from '../reduxStore/slice/movieSlice'
import {getTopRated, getToken, getSession,postRating,getRated} from '../api/tmdb-api'
import RateButton from '../components/buttons/rateButton'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import bg_top from '../assets/img/bg_top.png'

const MovieReviewPage = (props) => {
    const movies=useSelector(state=>state.movies)
    const dispatch=useDispatch()
    const getStoreRated=(session_id)=>{
      getRated(session_id).then(res=>{
        dispatch(loadRatedMovies(res))
      })
    }

    useEffect(()=>{
        getTopRated().then((res)=> {
          dispatch(loadMovies(res)) 
        })
        if(movies.session_key===""){
          if(movies.token!==""){
            console.log(movies.token);
            getSession(movies.token).then(res=>{
              dispatch(loadSessionKey(res.data.session_id));
            }).catch(err=>{
                window.location=`https://www.themoviedb.org/authenticate/${movies.token}`
            })
          }else{
            getToken().then(res=>{
              dispatch(loadToken(res.request_token))
            })
          }
        }else{
          getStoreRated(movies.session_key);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movies.token,movies.session_key])

    const handleRate=(id,value)=>{
      postRating(id,movies.session_key,value);
      getStoreRated(movies.session_key);
      window.location.reload()
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