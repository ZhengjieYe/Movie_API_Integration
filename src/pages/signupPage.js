import React,{useState} from "react";
// import { useFirebaseApp } from 'reactfire';
// import 'firebase/auth'
import welcome_bg from '../assets/img/welcome_bg.jpg'
import SignupForm from '../components/signupForm'
import Icon from '../assets/img/TMDB.png'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import {register} from '../api/movie-api'

const LoginPage = () => {
  // const firebase = useFirebaseApp();
  const [user, setUser] = useState({
    email : '' ,
    password : '' ,
    error : '' ,
    verifyEmail:''
  });

  const onSubmit =async data => {
    await register(data.email, data.password).then(res=>{
      console.log(res);
      if(res.code===201){
        console.log('hi');
        setUser({
          ...user,
          verifyEmail : `Welcome!. To continue please verify your email.` ,
        })
      }else{
        setUser({
          ...user,
          error : res.msg,
        })
      }
    })
    // await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    // .then( result => {
    //   const myURL = { url : 'http://localhost:3000/' }
    //   result.user.sendEmailVerification(myURL)
    //     .then( () => {
    //       setUser({
    //         ...user,
    //         verifyEmail : `Welcome!. To continue please verify your email.` ,
    //       })
    //     })
    //     .catch( error => {
    //       setUser({
    //         ...user,
    //         error : error.message,
    //       })
    //     })

    //   // Sign Out the user.
    //   firebase.auth().signOut();
    // }).catch( error => {
    //   // Update the error
    //   setUser({
    //     ...user,
    //     error : error.message,
    //   })
    // })
}


  return (
    <>
      <div className="bg-dark pt-5" style={{backgroundImage:`url(${welcome_bg})`,height:"100vh"}}>
        {
          user.verifyEmail==="" ? 
          (<SignupForm onSubmit={onSubmit} user={user}/>):
          (
              <Jumbotron fluid className="mx-auto w-25 p-4 rounded-lg mt-4 text-white" style={{backgroundColor:"black",opacity:"0.8"}}>
                <Container>
                  <Row>
                    <img src={Icon} alt="TMDB Icon"/>
                  </Row>
                  <Row>
                    <p>{user.verifyEmail}</p>
                  </Row>
                  <Row className="d-flex flex-row-reverse m-2">
                    <Link to="/login">
                      <Button variant="light" className="">Log in now!</Button>
                    </Link>
                  </Row>
                </Container>
              </Jumbotron>
          )
        }
        

      </div>
    </>
  );
}

export default LoginPage;