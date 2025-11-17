import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import assets from '../../assets/assets';

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 

    try {
      if (currState === "Sign up") {
        const res = await axios.post("http://localhost:4000/signup", {
          username,
          email,
          password,
        });
        setIsError(false);
        setMessage(res.data.message);
      } else {
        const res = await axios.post("http://localhost:4000/login", {
          email,
          password,
        });
        setIsError(false);
        setMessage(res.data.message);
        localStorage.setItem("token", res.data.token);

        
        setTimeout(() => {
          navigate("/chat");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };


  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="App Logo" className='logo' />
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>{currState}</h2>

        {currState === "Sign up" && (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email address"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          {currState === "Sign up" ? "Create Account" : "Login Now"}
        </button>

    
        {message && (
          <p
            className={`response-msg ${isError ? "error" : "success"}`}
          >
            {message}
          </p>
        )}

        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className="login-forget">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("Sign up")}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
