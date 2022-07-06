import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink as Link } from "react-router-dom"
import { getMostPopular, getGanres, getTopRated } from '../../config';

import CategoryItem from '../CategoryItem/CategoryItem';

import './CategoryList.css'

const CaregoryList = ({catName, topRated}) => {

  const [watchData, setWatchData] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    topRated ? getTopRated(catName).then(data => setWatchData(data.results.slice(0, 6))): getMostPopular(catName).then(data => setWatchData(data.results.slice(0, 5)));
    getGanres(catName).then(genres => setGenres(genres.genres));
  }, [])

  return (
    <section className="category">
      {!topRated ? <Link className='category__title link' to={`/categories/${catName}`}>{catName} by genre</Link>: <h2 className='category__title'>Top rated {catName}</h2>}
      <div className='category__list'>
        {
          watchData.map(watchItem => (
            <CategoryItem key={watchItem.id} watchItem={watchItem} genres={genres} />
          ))
        }
      {!topRated && <Link className='seemore' to={`/categories/${catName}`}>SEE MORE</Link>}
      </div>
    </section>
  )
}

export default CaregoryList