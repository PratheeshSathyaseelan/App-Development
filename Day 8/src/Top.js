// Top.js
import React from 'react';
import './Top.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './Redux/UserSlice';
import SearchBar from './SearchBar';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Menu from './Menu';

function Top() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const username = user ? user.username : 'Guest';

  return (
    <div className='taskbar'>
     
      <div className='log ' >
      <p>{username}</p>
        <Link to={'/'} ><AccountCircleIcon className='logicon'/></Link>
        
      </div>
      <div className='menuword'>
        <p>Menu</p>
        < WidgetsIcon className='menu'/>
      </div>
      <div className='sammenu'><Menu/></div>
    <div className="grid-container">
      <div className="grid-item">
        <h1 className="heading">The Story<br/>Seeds!..</h1>
      </div>
      
      <div className="grid-item title-logo">
        <img
          src="https://pbs.twimg.com/media/F6m-M16aEAArrq_?format=png&name=small"
          alt="podcast"
          height={90}
        />
      </div>
      <div className="grid-item search-bar">
      <SearchBar />
      </div>
      <div className="grid-item line">
        <img
          src="https://pbs.twimg.com/media/F6nML-WaAAAdiKQ?format=png&name=360x360"
          height={80}
        />
      </div>
    </div>
    </div>
  );
}

export default Top;
