import React from 'react';
import { getW500Img } from '../../config';
import { NavLink as Link } from "react-router-dom"

import './CategoryItem.css'

const CategoryItem = ({movie, genres}) => {
  return (
    <Link className='category__item' to={`/movie/${movie.id}`}>
      <div className="category__item__img">
        <img src={getW500Img(movie.poster_path)} alt="" />
      </div>
      <div className="category__item__content">
        <h4>{movie.title.length > 17 ?  movie.title.slice(0, 17) + '...': movie.title}</h4>
        <div className="genres">
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
      </div>
    </Link>
  )
}

export default CategoryItem