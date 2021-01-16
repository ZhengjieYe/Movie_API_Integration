import React, { useEffect, useState } from 'react';
import { withRouter,Route } from 'react-router-dom'
import { getPersonDetail } from '../api/tmdb-api'
import {getPopularActors,getActorKnowFor} from '../api/movie-api'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import welcome_bg from '../assets/img/welcome_bg.jpg'
import ActorDetail from '../components/actorDetail'
import KnowForCard from '../components/knowForCard'

const ActorDetailPage = (props)=>{
  const {id} = props.match.params;
  const [detail,setDetail]=useState({})
  useEffect(()=>{
    getPersonDetail(id).then(res=>{
      getPopularActors().then(response=>{
        const result=response.filter(a=>String(a.id)===String(id));
        getActorKnowFor(id).then(knowFor=>{
          setDetail({...res,...result[0],known_for:knowFor.known_for})
        })
      })
    })
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      {detail.known_for ? (
        <Container style={{backgroundImage:`url(${welcome_bg})`,minHeight:"100vh"}} fluid>
            <Row className="pt-5">
                <Col 
                  style={{backgroundColor:"black",minHeight:"100vh"}} 
                  xs={{ span: 6, offset: 3 }}
                  className="text-white"
                >
                  <ActorDetail detail={detail}/>
                  <div className="d-flex mt-3">
                    <Route 
                      path={`/actor/:id/knowFor`}
                      render={props => {
                        return detail.known_for.map((k)=>{
                          return <KnowForCard movie={k} key={k.id}/>
                        })
                      }}
                    />
                  </div>
                </Col>
            </Row>
          </Container>
        ):
          <p>Loading</p>
        }


      
    </>
  )
}

export default withRouter(ActorDetailPage);