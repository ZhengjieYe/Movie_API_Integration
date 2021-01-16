import React from "react";
import {Link} from "react-router-dom"
import useForm from "react-hook-form";
import Icon from '../../assets/img/TMDB.png'

const SignupForm = ({onSubmit, user}) => {
  const { register, handleSubmit, errors } = useForm();


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-25 p-4 rounded-lg mt-4" style={{backgroundColor:"black",opacity:"0.8"}}>
        <img src={Icon} alt="TMDB Icon"/>

        <div className="form-group text-white"> 
        <label className="font-weight-bolder">Enter your email</label>
        <input 
            className="form-control" 
            data-test="signup-email"
            name="email" 
            defaultValue="email" 
            ref={
            register({
                required: 'Please enter your email'
            })
            }
        />
        <label className="text-warning">{errors.email?.message}</label>
        </div>

        <div className="form-group text-white">
        <label className="font-weight-bolder">password</label>
        <input
            className="form-control"
            data-test="signup-password"
            name="password"
            type="password"
            ref={register({ required: true, minLength: 4 })}
        />
        </div>

        <div className="form-group text-white">
        <label className="font-weight-bolder">verify password</label>
        <input
            className="form-control"
            data-test="signup-verify"
            name="verify"
            type="password"
            ref={register({ required: true, minLength: 4 })}
        />
        <label className="text-warning">
            {errors.password?.type==="required" && <p>Please enter your password</p>}
        </label>
        <label className="text-warning">
            {errors.password?.type==="minLength" && <p>your password should be longer than 4</p>}
        </label>
        <label className="text-warning">
            {errors.verify?.type==="required" && <p>Please enter your verify password </p>}
        </label>
        <label className="text-warning">
            {errors.verify?.type==="minLength" && <p>your verify password should be longer than 4</p>}
        </label>
        <label className="text-warning">{user.error}</label>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-1 mb-2">Sign up</button>
        <span className="text-white-50">Do have account?</span>
        <Link to="/login" className="text-white">
        Login now!
        </Link>
    </form>
    </>
  );
}

export default SignupForm;