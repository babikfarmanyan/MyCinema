import React from 'react';

import { NavLink as Link } from 'react-router-dom';
import { getW500Img } from '../../../config';

const SearchItem = ({watchItem, setShowSearch, genres}) => {
    
    const watchName = 'name' in watchItem ? watchItem.name: watchItem.title;
    const originalName = 'original_name' in watchItem ? watchItem.original_name: watchItem.original_title
    let releaseDate;

    if ('release_date' in watchItem && watchItem['release_date'] !== '' ){
      releaseDate = watchItem.release_date.slice(0, 4);
    } else if ('first_air_date' in watchItem && watchItem['first_air_date']) {
      releaseDate = watchItem.first_air_date.slice(0, 4);
    }

  return (
    <Link to={`${'name' in watchItem ? "tv" : "movie"}/${watchItem.id}`} onClick={() => setShowSearch(false)} className='search__item'>
        <img src={getW500Img(watchItem.poster_path)} alt="" />
        <div className="search__item-content">
            <h2>{watchName}</h2>
            <h4>Original name: {originalName}</h4>
            {
            genres.map((genre, index) => {
              console.log();
              if (genre.id === watchItem.genre_ids[0] && watchItem.genre_ids[0] !== undefined) {
                return (
                  <span key={index}>{`${releaseDate}, ${genre.name}`}</span>
                )
              }
            })
          }
        </div>
    </Link>
  )
}

export default SearchItem