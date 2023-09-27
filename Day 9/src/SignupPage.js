import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Top from './Top';

function SignupPage() {
  const nav=useNavigate();
  const[username,setusername]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const submit=(event)=>{
    event.preventDefault();
    if(username.length===0&&email.length===0&&password.length===0) 
    { alert("Enter the Details");
    }
    else
    {
    nav("/dash")
    }
  }
  return (
    <div>
      <Top/>
    <div className='signuphead'>
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) =>setusername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) =>setemail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) =>setpassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={submit}>Sign Up</button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default SignupPage;
