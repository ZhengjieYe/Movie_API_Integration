import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import welcome_bg from '../assets/img/welcome_bg.jpg'
import ActorCard from '../components/actorCard/index'
import { getPopularPeople } from '../api/tmdb-api'
import Sortby from '../components/sortbyButtonGroup'

const PopularActorPage = (props) => {
  const [actors,setActors]=useState([])
  const [sortBy, setSortBy] = useState('1');
  const [gender, setGender] = useState('1');

    useEffect(()=>{
      getPopularPeople().then(res=>{
        let temp;
        if (sortBy==="1"){
          temp=res.sort((a,b)=>{
            if(a.name>b.name) return 1;
            if(a.name<b.name) return -1;
            if(a.name===b.name) return 0;
            return 0
          })
        }
        if (sortBy==="2"){
          temp=res.sort((a,b)=>{
            if(a.popularity>b.popularity) return -1;
            if(a.popularity<b.popularity) return 1;
            if(a.popularity===b.popularity) return 0;
            return 0
          })
        }
        if (gender==="2"){
          temp=res.filter(a=>a.gender===2)
        }
        if (gender==="3"){
          temp=res.filter(a=>a.gender===1)
        }
        setActors(temp)
      })
    },[sortBy,gender])

    return (
      <>
        {actors ? (
          <Container style={{backgroundImage:`url(${welcome_bg})`}} fluid>
            <Row className="pt-5">
                <Col 
                  style={{backgroundColor:"black"}} 
                  xs={{ span: 6, offset: 3 }}
                  className="text-white"
                >
                  <h1 className="text-white">Popular actors:</h1>
                  <Sortby setSortBy={setSortBy} sortBy={sortBy} gender={gender} setGender={setGender}/>
                  {actors.map(actor=>{
                    return <ActorCard actor={actor} key={actor.id}/>
                  })}
                </Col>
            </Row>
          </Container>
        ):
          <p>Loading</p>
        }
      </>

    )
}

export default PopularActorPage;