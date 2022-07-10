import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {getGenres, getMoviesByGenre} from '../../config'

import FilterDate from '../../components/FilterDate';
import FilterCategory from '../../components/FilterCategory';

import './Categories.css';

const Categories = () => {

  const {name} = useParams('');

  const [startYear, setStartYear] = useState(1800);
  const [endYear, setEndYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [fetchGenres, setFetchGenres] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getGenres(name).then(data => setGenres(data.genres));
  }, [])

  useEffect(() => {
    // console.log(fetchGenres);
    // for (let genre of fetchGenres) {
    //   getMoviesByGenre(genre, startYear, endYear, page, name).then(data => console.log(data))
    // }
  }, [fetchGenres, startYear, endYear, page])

  return (
    <section className='categories'>
      <h1 className="categories__title">{name} by genre</h1>
      <FilterCategory genres={genres} setFetchGenres={setFetchGenres} />
      <FilterDate setStartYear={setStartYear} setEndYear={setEndYear} />
    </section>
  )
}

export default Categories