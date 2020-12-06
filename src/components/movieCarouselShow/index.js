import React,{useEffect, useState} from "react";
import Image from 'react-bootstrap/Image'
import welcome_bg from '../../assets/img/welcome_bg.jpg'
import {getMovieBackdrops} from '../../api/tmdb-api'
import Carousels from '../MovieCarousels'

const MovieCarouselShow=({movies,carouselAction})=>{


  const [items, setItems]=useState([]);
  useEffect(()=>{
    const temp=[];
    movies.map(async (m,idx)=>{
      const res=await getMovieBackdrops(m.id);
      temp.push({
        title:m.original_title,
        overview:m.overview,
        src:res,
        id:m.id,
        favorite:m.favorite,
        isInWatchList:m.isInWatchList
      });
      if (idx===movies.length-1){
        setItems(temp)
      }
    })
  },[movies])

  return (
    <>
      <Image 
        src={welcome_bg}
        fluid 
        className="position-absolute overflow-hidden" 
        style={{opacity:0.7}}
      />
        <Carousels items={items} carouselAction={carouselAction}/>
    </>
  );
}

export default MovieCarouselShow;