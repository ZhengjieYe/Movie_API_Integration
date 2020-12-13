import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ActorInfo = ({detail}) => {
  return (
    <Container>
      <Row className="text-white flex-column">
        <h4 className="text-white">{detail.name}</h4>
        <p className="pl-3">{detail.birthday} | {detail.place_of_birth}</p>
        <p>{detail.biography}</p>
      </Row>
    </Container>
  )
}

export default ActorInfo;