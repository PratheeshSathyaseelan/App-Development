import React, { useState } from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import Top from './Top';
import Topbelow from './Topbelow';
import './NewStories.css';
import DownFooter from './DownFooter';

const stories = [
  {
    id: 1,
    title: 'The Magical Forest',
    description: 'Join us on an adventure in the enchanted forest with talking animals.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1477773381i/32807094.jpg', 
    audioUrl: 'forest-story.mp3', 
  },
  {
    id: 2,
    title: 'Pirate Adventure',
    description: 'Ahoy, matey! Sail the high seas and find hidden treasure with Captain Jack.',
    imageUrl: 'https://m.media-amazon.com/images/I/61524ji4C-L._AC_UF1000,1000_QL80_.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 3,
    title: 'Pirates of the Caribbean',
    description: 'Pirates of the Caribbean is an American fantasy film with fun.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FSXfzG8YTkrruojixklJi8te2NbxWABP8Q&usqp=CAU', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 4,
    title: 'Cinderella',
    description: 'After the death of her father,Ella is troubled by her stepmother.',
    imageUrl: 'https://www.sekolahbahasainggris.co.id/wp-content/uploads/2016/12/soi.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 5,
    title: 'Heidi',
    description: 'An orphan named Heidi moves to the Swiss to live with her grandfather.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QbHrYPs2D6ubKt9lD3H-0V2jaL4ypohlmuy3EjWR9_QXKJEaVCPzFX3Nr8CUZkZYexw&usqp=CAU', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 5,
    title: 'Stuart Little',
    description: 'Stuart Little is a 1999 American live-action-animated comedy film.',
    imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/31926d18fcff390ad7e08736adca22b0c65f7e39af0629a1b413c313087a9bab.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 6,
    title: 'Honey bee',
    description: 'Bee loves freedom,unlike other bees who live in the hive.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDWNasQBc8dbh1Lse5io5tmB_h-ODKGaIug&usqp=CAU', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 7,
    title: 'Mary Queen of Scots',
    description: 'Mary Stuart returns to Scotland in order to claim her rightful throne.',
    imageUrl: 'https://digitalfilms.files.wordpress.com/2018/10/df1825_mqos_02.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 8,
    title: 'Narnia',
    description: 'While playing,Lucy and her siblings went to a place called Narnia.',
    imageUrl: 'https://cdn.britannica.com/90/103190-050-296352C2/movie-poster-protagonists-CS-Wardrobe-left-Lewis.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 9,
    title: 'Pirate Adventure',
    description: 'Ahoy, matey! Sail the high seas and find hidden treasure with Captain Jack.',
    imageUrl: 'https://m.media-amazon.com/images/I/61524ji4C-L._AC_UF1000,1000_QL80_.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
];


const Story = ({ title, description, imageUrl, audioUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="story">
      <div className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? <StarRateIcon color="error" /> : <StarRateIcon />}
      </div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

function NewStories() {
  return (
    <>
    <div className='bc'>
    <div>
      <Top/>
    </div>
    <div>
      <Topbelow/>
    </div>
    <div className="new-stories1">
      <h1 className='fs' >New Stories for Kids</h1>
      <div className="story-container">
        {stories.map((story) => (
          <Story
            key={story.id}
            title={story.title}
            description={story.description}
            imageUrl={story.imageUrl}
            audioUrl={story.audioUrl}
          />
        ))}
      </div>
    </div>
    </div>
   <div>
    <DownFooter/></div>
    </>
  );
}

export default NewStories;