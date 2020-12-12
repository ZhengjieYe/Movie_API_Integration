import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";
import Icon from '../../assets/img/TMDB.png'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import { useUser } from 'reactfire' ;
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { deleteBoth } from '../../reduxStore/slice/movieSlice'
import { deleteSession } from '../../api/tmdb-api'

import { useFirebaseApp } from 'reactfire' ;
import 'firebase/auth'


export const SiteHeader = (props) => {
  const movies=useSelector(state=>state.movies)
  const dispatch=useDispatch()

  const firebase=useFirebaseApp();
  const user=useUser();
  const logout=()=>{
    deleteSession(movies.session_key).then((res)=>{
      console.log(res);
      dispatch(deleteBoth())
    })
    firebase.auth().signOut();
    props.history.push("/");
  }
  return (
    <nav className="navbar fixed-top " style={{backgroundColor:"rgba(0,0,0,0.3)"}}>
      <nav className="navbar-brand">
        <Link className=" text-white" to="/">
          <img src={Icon} style={{height:"6vh"}} alt="TMDB_ICON"/>
        </Link>
      </nav>

      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link> 
          </li>
          <li className="nav-item">
              <Link className="nav-link text-white" to="/movies/upcoming" data-test="site-header-upcoming">
                Upcoming
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites" data-test="site-header-favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>

      {!user.data && (
        <Link to="/login" className="btn btn-outline-light ml-auto" data-test="site-header-login">
        Log in
      </Link>
      )}
      
      {user.data && (
        <Dropdown className="ml-auto">
        <Dropdown.Toggle 
          id="dropdown-basic" 
          className=" m-0 h-50" 
          variant="outline-light" 
          data-test="siteheader-user--login"
        >
          <Image 
          style={{height:"3vh"}}
          src="https://secure.gravatar.com/avatar/946129578ef96878bbca880ff261a685?s=46&d=identicon" 
          roundedCircle 
        />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item date-test="siteheader-rate"><Link to="/rate">Rate now</Link></Dropdown.Item>
          <Dropdown.Item data-test="siteheader-logout" onClick={logout}>Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )}
    </nav>
  );
};

export default withRouter(SiteHeader);