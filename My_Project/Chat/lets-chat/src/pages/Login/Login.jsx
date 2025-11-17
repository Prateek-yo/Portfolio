import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets';

const Login = () => {
    const [currstate,setCurrState]=useState("Sign up")
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="App Logo" className='logo' />
      <form  className='login-form'>
        <h2>{currstate}</h2>
        {currstate==="Sign up"?<input type="text"placeholder='username' className='form-input' required/>:null}
        <input type="email"placeholder='email address' className='form-input' required/>
        <input type="password"placeholder='password' className='form-input' required/>
        <button type='submit'>{currstate==="Sign up"?"create account":"Login now"}</button>
        <div className="login-term">
            <input type="checkbox"/>
            <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forget">{
            currstate==="Sign up"?<p className="login-toggle">Already have an account <span onClick={()=>setCurrState("Login")}>click here</span></p>:<p className="login-toggle">Create an account <span onClick={()=>setCurrState("Sign up")}>click here</span></p>}
            
        </div>
      </form>
    </div>
  );
};

export default Login;

