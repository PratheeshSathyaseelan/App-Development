import React from 'react';
import './PodcastEpisode.css';
import DashboardPage from './DashboardPage';

function PodcastEpisode({ episode }) {
  const { title, description, audioUrl, imageUrl } = episode;

  return (
    <div className="episode">
      <img src={imageUrl} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default PodcastEpisode;
