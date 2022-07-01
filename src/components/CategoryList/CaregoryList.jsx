import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink as Link } from "react-router-dom"
import { getTopRated, getGanres } from '../../config';

import CategoryItem from '../CategoryItem/CategoryItem';

import './CategoryList.css'

const CaregoryList = ({catName}) => {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getTopRated(catName).then(data => setMovies(data.results.slice(0, 5)));
    getGanres(catName).then(genres => setGenres(genres.genres));
  }, [])

  return (
    <section className="category">
      <Link className='category__title' to={'/categories/movies'}>Movies</Link>
      <div className='category__list'>
        {
          movies.map(movie => (
            <CategoryItem key={movie.id} movie={movie} genres={genres} />
          ))
        }
      <Link className='seemore' to={'/categories/movies'}>SEE MORE</Link>
      </div>
    </section>
  )
}

export default CaregoryList