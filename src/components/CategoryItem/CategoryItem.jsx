import React from 'react';
import { getW500Img } from '../../config';
import { NavLink as Link } from "react-router-dom"

import './CategoryItem.css'

const CategoryItem = ({watchItem, genres, catName}) => {

  const originalName = 'name' in watchItem ? watchItem.name: watchItem.title;
  const realiseDate = 'release_date' in watchItem ? watchItem.release_date.slice(0, 4): watchItem.first_air_date.slice(0, 4);

  return (
    <Link className='category__item' to={`/${catName}/${watchItem.id}`}>
      <div className="category__item__img">
        <img src={getW500Img(watchItem.poster_path)} alt="" />
      </div>
      <div className="category__item__content">
        <h4>{originalName.length > 17 ?  originalName.slice(0, 17) + '...': originalName}</h4>
        <div className="genres">
          {
            genres.map((genre, index) => {
              if (genre.id === watchItem.genre_ids[0]) {
                return (
                  <span key={index}>{`${realiseDate} , ${genre.name}`}</span>
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