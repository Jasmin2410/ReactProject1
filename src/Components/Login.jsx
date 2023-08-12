import React from 'react';
import { useState } from "react";
import "../Styles/Login.css"
import axios from 'axios';

function Login() {
    const [details, setDetails] = useState({});
  
    const handleInput = (e) => {
      setDetails({ ...details, [e.target.name]: e.target.value });
    };
  
    const handleLogin = (e) => {
        e.preventDefault();
      axios
        .post("https://reqres.in/api/login", details)
        .then((res) => {
          console.log(res);
          if (res.request.status === 200) {
            alert("✅ succrssfully login !");
          }
        })
        .catch((err) => {
          if (err) {
            alert("❌ Please Enter Correct Details  ");
          }
          console.log(err);
        });
    };
    return (
        <div className='signup_container'>
        

        <form>
      
        <input
          placeholder="email"
          name="email"
          type="email"
          onChange={handleInput}
        /> 
        <input
          placeholder="password"
          name="password"
          type="password"
          onChange={handleInput}
        />
        <button className='btn2' onClick={(e) => handleLogin(e)}>Login</button>
     </form>
      </div>
    );
  }

export default Login;