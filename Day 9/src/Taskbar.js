
import React from 'react';
import './Taskbar.css'
import { Link } from 'react-router-dom';

const Taskbar = () => {
  return (
    <div className="sidebar">
      <div className='letters'> 
      <ul>
        <img className='db' src='https://cdn-icons-png.flaticon.com/128/4725/4725681.png'></img>
        <li className='dbl'>Dashboard</li>
        <img className='mg' src='https://cdn-icons-png.flaticon.com/128/9068/9068673.png'></img>
        <li className='mgl'>Messages</li>
        <img className='nt' src='https://cdn-icons-png.flaticon.com/128/3541/3541850.png'></img>
        <li className='ntl'>Notifications</li>
        <img className='pd' src='https://cdn-icons-png.flaticon.com/128/8822/8822621.png'></img>
        <li className='pdl'>Podcast List</li>
        <img className='logout' src='https://cdn-icons-png.flaticon.com/128/10313/10313098.png'></img>
        <Link to= {"/"}><li className='logoutl'>Logout</li></Link>
      </ul>
      </div>
    </div>
  );
};

export default Taskbar;
