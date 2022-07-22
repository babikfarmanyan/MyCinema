import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink as Link } from "react-router-dom"
import { getMostPopular, getGenres, getTopRated, getSimilar } from '../../config';

import CategoryItem from '../CategoryItem';

import './CategoryList.css'

const CategoryList = ({catName, topRated , similar ,id}) => {

  const [watchData, setWatchData] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
   if (topRated) {getTopRated(catName).then(data => setWatchData(data.results.slice(0, 6))) } 
    else if(similar) {getSimilar(id,similar).then(data => setWatchData(data.results.slice(0, 6)));}
     else{ getMostPopular(catName).then(data => setWatchData(data.results.slice(0, 5)))}

    getGenres(catName).then(genres => setGenres(genres.genres));
  }, [])

  return (

    <section className="category">
     { similar ? "" :!topRated ? <Link className='category__title link' to={`/categories/${catName}`}>{catName} by genre</Link> :  <h2 className='category__title'>Top rated {catName}</h2> }
      <div className="category__list">
        {
          watchData.map(watchItem => (
            <CategoryItem key={watchItem.id} watchItem={watchItem} genres={genres} catName={catName} topRated={topRated}/>
          ))
        }
      {!topRated &&  !similar && <Link className='category__item seemore' to={`/categories/${catName}` }>SEE MORE</Link>}
      </div>
    </section>
  )
}

export default CategoryList