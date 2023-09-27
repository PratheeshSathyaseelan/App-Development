import React from 'react'
import './Topbelow.css'
//import Policy from './Policy';
import PrivacyPolicy from './PrivacyPolicy';
import { Link } from 'react-router-dom';

function Topbelow() {

  return (
    <div>
       <div className="header">
  <div className="navigation-menu">
    <Link to="/All" style={{textDecoration:'none',color:'whitesmoke'}}>All</Link>
    <Link to="/TrendingNow" style={{textDecoration:'none',color:'whitesmoke'}}>Trending Now</Link>
    <Link to="/OldStories" style={{textDecoration:'none',color:'whitesmoke'}}>Old Stories</Link>
    <Link to="/newstories" style={{textDecoration:'none',color:'whitesmoke'}}>New Stories</Link>
    <Link to="/MoodsAndGenre" style={{textDecoration:'none',color:'whitesmoke'}}>Moods & Genre</Link>
    <Link to="/FaQ" style={{textDecoration:'none',color:'whitesmoke'}}>FAQ</Link>
    <Link to="/policy" style={{textDecoration:'none',color:'whitesmoke'}}><PrivacyPolicy/></Link>
    
    <Link to="/TandC" style={{textDecoration:'none',color:'whitesmoke'}}>Terms&Conditions</Link>
  </div>
</div>
    </div>
  )
}
export default Topbelow;
