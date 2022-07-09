import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {getGenres, getMoviesByGenre, getMostPopular} from '../../config'

import FilterDate from '../../components/FilterDate';
import FilterCategory from '../../components/FilterCategory';
import WatchList from '../../components/WatchList/WatchList';

import './Categories.css';

const Categories = () => {

  const {name} = useParams('');

  const [startYear, setStartYear] = useState(1800);
  const [endYear, setEndYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [fetchGenres, setFetchGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [watchItems, setWatchItems] = useState([]);
  const [id, setId] = useState(undefined);

  useEffect(() => {
    getGenres(name).then(data => setGenres(data.genres));
  }, [])

  useEffect(() => {
    setPage(1);
    if (fetchGenres.length === 0) {
      getMostPopular(name, page, startYear, endYear).then(data => setWatchItems(data.results))
    }else {
      if (id !== undefined) {
        clearTimeout(id);
      }
  
      setId(setTimeout(() => {
  
        setWatchItems([]);
  
        const requests = [];
  
        for (let genre of fetchGenres) {
          requests.push(getMoviesByGenre(genre, startYear, endYear, page, name).then(data => data.results));
        }
  
        Promise.all(requests).then(data => {
          const confData = [];
  
          for (let item of data) {
            confData.push(...item);
          }
          return confData;
        }).then(confData => setWatchItems(confData));
  
      }, 1000));
    }

  }, [fetchGenres, startYear, endYear])

  return (
    <section className='categories'>
      <h1 className="categories__title">{name} by genre</h1>
      <FilterCategory genres={genres} setFetchGenres={setFetchGenres} />
      <FilterDate setStartYear={setStartYear} setEndYear={setEndYear} />
      <WatchList watchItems={watchItems} name={name} genres={genres}/>
    </section>
  )
}

export default Categories