import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getPersonDetail } from '../../api/tmdb-api'
import Spinner from 'react-bootstrap/Spinner'
import _ from 'lodash';
import { Link } from 'react-router-dom'

const ActorCard = ({actor}) => {
  const [detail,setDetail]=useState({})
  useEffect(()=>{
      getPersonDetail(actor.id).then(res=>{
        setDetail({...actor,...res})
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      {detail.id ? (
            <Container className="mb-3">
            <Row>
              <Col xs={3}>
                <Card>
                  <Link to={{
                    pathname:`/actor/${detail.id}`,
                    state:{
                      detail:detail
                    }
                  }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${detail.profile_path}`} />
                  </Link>
                </Card>
              </Col>
              <Col>
                <h4 className="text-white mb-0">{detail.name}</h4>
                <p className="text-white-50 mb-0">popularity: {detail.popularity}</p>
                <p>
                  {_.truncate(detail.biography,{length:350})}
                </p>
              </Col>
            </Row>
          </Container>
      ):
        <Spinner animation="border" variant="primary" />
      }
    </>
  )
}

export default ActorCard;