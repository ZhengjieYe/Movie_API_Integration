import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import ActorInfo from '../actorInfo'

const ActorDetail = ({detail})=>{
  return (
    <>
      {detail.id ? (
            <Container fluid>
            <Row className="pt-5">
                <Col 
                  style={{backgroundColor:"black"}} 
                  xs={4}
                  className="text-white"
                >
                  <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${detail.profile_path}`} />
                  </Card>
                  <Button variant="outline-light" className="w-100 mt-2"><a href={detail.homepage} className="text-white">Learn more</a></Button>
                  <Button variant="outline-light" className="w-100 mt-2"><Link to={`/actor/${detail.id}/knowFor`} className="text-white">Know for</Link></Button>
                </Col>
                <Col>
                  <ActorInfo detail={detail}/>
                </Col>
            </Row>
          </Container>
      ):
        <Spinner animation="border" variant="primary" />
      }
    </>
  )
}

export default withRouter(ActorDetail);