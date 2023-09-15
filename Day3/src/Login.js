

import React,{useState} from "react";
import './Login.css';
export const Login = (props) =>{
    const [Email,setEmail]= useState('');
    const [Password,setPassword]=useState('');
   
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(Email);

    }
    return (
        <div className="auth-form-container">
        <form className="Login-form" onSubject={handleSubmit}>
            <div className="image-back">
            </div>
            <label htmlfor ="Email">Email</label>
            <input value={Email} onChange={(e)=>setEmail(e.target.value)}type="Email" placeholder="youremail@gmail.com" id="Email" name="Email" />
            <label htmlfor ="Password"Password>Password</label>
            <input value={Password} onChange={(e)=>setPassword(e.target.value)} type="Password" placeholder="**********" id="Password" name="Password" />
            <button type="Submit">Log In</button>
        </form>
        <button className="link-btn"onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register</button>
        </div>
    )
}