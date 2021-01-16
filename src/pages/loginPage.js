import React,{useState} from "react";
import {Link} from "react-router-dom"
import useForm from "react-hook-form";
// import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import welcome_bg from '../assets/img/welcome_bg.jpg'
import Icon from '../assets/img/TMDB.png'
import {withRouter} from 'react-router-dom'
import {login} from '../api/movie-api';
import { useDispatch } from "react-redux";
import {loadToken} from '../reduxStore/slice/movieSlice'

const LoginPage = (props) => {
  // const movies=useSelector(state=>state.movies)
  const dispatch=useDispatch()

  const { register, handleSubmit, errors } = useForm();
  // const firebase = useFirebaseApp();
  const [user, setUser] = useState({
    email : '' ,
    password : '' ,
    error : '' ,
  });

  const onSubmit = data => {
    login(data.email, data.password)
    .then( result => {
      if(result.code){
        setUser({
          ...user,
          error: result.msg
        })
      }else{
        setUser({
          ...user
        })
        dispatch(loadToken(result.token))

        props.history.push('/')
      }
    })

  }; 


  return (
    <>
      <div className="bg-dark pt-5" style={{backgroundImage:`url(${welcome_bg})`,height:"100vh"}}>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-25 p-4 rounded-lg mt-4" style={{backgroundColor:"black",opacity:"0.8"}}>
          <img src={Icon} alt="TMDB Icon"/>

          <div className="form-group text-white"> 
            <label className="font-weight-bolder">Email</label>
            <input 
              data-test="login-email"
              className="form-control" 
              name="email" 
              defaultValue="email" 
              ref={
                register({
                  required: 'Please enter your email' // JS only: <p>error message</p> TS only support string
                })
              }
            />
            <label className="text-warning">{errors.email?.message}</label>
          </div>
          <div className="form-group text-white">
          <label className="font-weight-bolder">password</label>
            <input
              data-test="login-password"
              className="form-control"
              name="password"
              type="password"
              ref={register({ required: true, minLength: 4 })}
            />
            <label className="text-warning">
              {errors.password?.type==="required" && <p>Please enter your password</p>}
            </label>
            <label className="text-warning">
              {errors.password?.type==="minLength" && <p>your password should be longer than 4</p>}
            </label>
            <label className="text-warning">{user.error}</label>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-1 mb-2">Log in</button>
          <span className="text-white-50">Do not have account?</span>
          <Link to="/signup" className="text-white">
            Sign up now!
          </Link>
        </form>
      </div>
    </>
  );
}

export default withRouter(LoginPage);