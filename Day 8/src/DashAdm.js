import React from 'react';
import PodcastEpisode from './PodcastEpisode'; 
import './DashAdm.css'; 
import Taskbar from './Taskbar';
import Top from './Top';
import images from './Images/images.avif'

const episodes = [
 
  
];

function DashAdm() {
 
  return (
    <div className="page-container">
    <div className='top'>
      <Top/>
    </div>

<div className="header">
<div className="navigation-menu">
  <a href="/All">All</a>
  <a href="/TrendingNow">Trending Now</a>
  <a href="/OldStories">Old Stories</a>
  <a href="/NewStories">New Stories</a>
  <a href="/MoodsAndGenre">Moods & Genre</a>
  <a href="/TopAlbum">Top Album</a>
  <a href="/TopPlaylists">Top Playlists</a>
  <a href="/Podcast">Podcast</a>
</div>
</div>


    <div className="dashboard">
    <h1 className='kids'>Kids Story telling Podcast</h1>
    <div className="episode-list">
      {episodes.map((episode) => (
        <PodcastEpisode key={episode.id} episode={episode} />
      ))}
      <button className='samupdate'>Update</button>
    <button className='samdelete'>Delete</button>
    </div>
  </div>
  {/* <Footer /> */}
  </div>
  );
}

export default DashAdm;
