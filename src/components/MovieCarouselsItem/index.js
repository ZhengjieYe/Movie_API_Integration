import React,{ useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import AddButton from '../buttons/addButton'
import SuccessButton from '../buttons/successButton'
import RemoveAlert from '../alert/removeFavoriate'

const MovieCarousels=({items})=>{
  const [show, setShow] = useState(false);

  const carouselItems=items.map((item)=>{
    return (
      <Carousel.Item interval={1000} className="h-100" key={item.title}>
        <Link to={`/movies/${item.id}`}>
          <img
            className="d-block ml-auto"
            style={{height:"75vh"}}
            src={"https://image.tmdb.org/t/p/w780/"+item.src}
            alt="First slide"
          />
        </Link>
        <Carousel.Caption 
          className="text-left w-50 h-100 pl-4"
          style={{top:0,left:0,backgroundImage:"linear-gradient(to right,rgba(0,0,0,1), rgba(0,0,0,0))"}}
        >
          <h1 className="mb-5">{item.title}</h1>
          <RemoveAlert id={item.id} show={show} setShow={setShow} className="w-75"/>
          {
            item.favorite?
              <SuccessButton setShow={setShow} content="Already in favorite" size="lg"/>:
              <AddButton id={item.id} content="Add to favorite" size="lg" variant="light"/>
          }
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-white ml-5"
            style={{opacity:0.7}}
          >
              More info
          </Button>
          <p className="w-75 mt-2">{item.overview}</p>
        </Carousel.Caption>
    </Carousel.Item>
    )
  })

  return (
    <Carousel className="h-100" style={{height:"75vh"}} fade={true} controls={false} >
      {carouselItems}
    </Carousel>
  );
}

export default MovieCarousels;