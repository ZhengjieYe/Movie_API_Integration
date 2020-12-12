import React,{ useState,useEffect } from "react";
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import { useSelector } from "react-redux";

const RateBotton = ({handleRate,movie}) => {
  const movies=useSelector(state=>state.movies)
  const [moviesId,setMoviesId]=useState([])
  const [star,setStar]=useState(1)
  useEffect(()=>{
    const temp=movies.ratedMovies?.map((r)=>r.id)
    setMoviesId(temp)
  },[movies,star])

  return (
    <>
		<Container>
      <Row className="position-absolute">
      {moviesId.indexOf(movie.id)!==-1 ?
        (
        <Badge variant="success">{movies.ratedMovies[moviesId.indexOf(movie.id)].rating}</Badge> 
        ):
        (
          <Badge variant="danger">un-rated</Badge> 
        )
      }
      </Row>
			<Row>
        <OverlayTrigger
					trigger="click"
					key="bottom"
					placement="bottom"
					overlay={
            <Popover id={`popover-positioned-bottom`}>
            <Popover.Title as="h3">{"click the number you want:"}</Popover.Title>
            <Popover.Content className="d-flex flex-column">
                <Rate
                    className="text-info"
                    defaultValue={1}
                    character={({ index }) => {
                        return index + 1;
                    }}
                    onChange={(value)=>{setStar(value)} }
                    count={10}
                />
            <Button variant="primary" onClick={()=>{
              handleRate(movie.id,star)
              }}>Confirm now!</Button>
            </Popover.Content>
            </Popover>
					}>
					<Button variant="primary" date-test="rate-button">Rate now!</Button>
        </OverlayTrigger>
			</Row>

		</Container>
     
    </>
  );
};

export default RateBotton;