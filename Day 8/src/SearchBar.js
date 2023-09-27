
import React from 'react';
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div>
     <SearchIcon className='search'/>
    <input className='color' type="text" placeholder="Search Stories"/>
 
    </div>
    
  );
};

export default SearchBar;
