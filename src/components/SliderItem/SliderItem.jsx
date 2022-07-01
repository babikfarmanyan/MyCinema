import React from 'react';
import { getOriginalImg } from '../../config';

import './SliderItem.css';

const SliderItem = ({movie, genres}) => {
  return (
    <div className='slider__item'>
        <img src={getOriginalImg(movie.backdrop_path)} alt="" />
        <div className='slider__item__content'>
            <h3>{movie.original_title}</h3>
            <p>{movie.overview}</p>
            <div className='genres'>
              {
                genres.map(genre => {
                  if (movie.genre_ids.includes(genre.id)) {
                    return (
                      <span key={genre.id}>{genre.name}</span>
                    )
                  }
                })
              }
            </div>
            <button>see now</button>
        </div>
    </div>
  )
}

export default SliderItem