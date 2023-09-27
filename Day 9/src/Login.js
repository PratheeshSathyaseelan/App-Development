import React, { useState } from 'react';
import './Login.css';
import Top from './Top'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from './Redux/UserSlice';
import { useDispatch } from 'react-redux';
function Login() {

  
    const handleChange = (e) => {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
      console.log(formdata);
    };
    const [formdata, setFormdata] = useState({
      username: "",
      password: "",
    });
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      if(formdata.username.length===0){
        alert("Enter Username!")
      }
      else if(formdata.password.length===0){
        alert("Enter Password!")
      }
   else{
      navigate("/dash");
   }
      dispatch(
        login({
          username: formdata.username,
        })
      );
    };
  
  return (
    <>
    <div>
      <Top/>
    </div>
    <div className='loginbody'>
      <div className="login-page">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
           name='username'
            required value={formdata.username}
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name='password'
            required value={formdata.password}
            onChange={handleChange}
          />
        </div>
        <Link to='/dash' style={{textDecoration:'none',color:'whitesmoke'}}><button type="submit" onClick={handleSubmit}>Login</button></Link>
        <Link to='/signup' style={{textDecoration:'none',color:'whitesmoke'}}><button className='signup'>Create Account</button></Link>
        <Link to="/admin" style={{textDecoration:'none',color:'whitesmoke'}}><button>Admin Login</button></Link>
      </form>
      </div>
      </div>
      </>
  );
}

export default Login;
{/* <img className='img' src='https://c4.wallpaperflare.com/wallpaper/89/114/560/rapunzel-tangled-disney-s-tangled-wallpaper-preview.jpg'></img> */}
      
  