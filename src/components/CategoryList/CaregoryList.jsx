import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink as Link } from "react-router-dom"
import { getMostPopular, getGanres } from '../../config';

import CategoryItem from '../CategoryItem/CategoryItem';

import './CategoryList.css'

const CaregoryList = ({catName}) => {

  const [watchData, setWatchData] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMostPopular(catName).then(data => setWatchData(data.results.slice(0, 5)));
    getGanres(catName).then(genres => setGenres(genres.genres));
  }, [])

  return (
    <section className="category">
      <Link className='category__title' to={`/categories/${catName}`}>{catName}</Link>
      <div className='category__list'>
        {
          watchData.map(watchItem => (
            <CategoryItem key={watchItem.id} watchItem={watchItem} genres={genres} />
          ))
        }
      <Link className='seemore' to={`/categories/${catName}`}>SEE MORE</Link>
      </div>
    </section>
  )
}

export default CaregoryList