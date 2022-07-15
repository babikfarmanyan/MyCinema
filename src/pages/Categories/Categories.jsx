import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from 'antd';

import {getGenres, getMoviesByGenre, getMostPopular} from '../../config'

import FilterDate from '../../components/FilterDate';
import FilterCategory from '../../components/FilterCategory';
import WatchList from '../../components/WatchList/WatchList';

import './Categories.css';

const Categories = () => {

  const {name} = useParams('');

  const [startYear, setStartYear] = useState(1900);
  const [endYear, setEndYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [fetchGenres, setFetchGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [watchItems, setWatchItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [id, setId] = useState(undefined);

  let watchListMemory = JSON.parse(localStorage.getItem('watchListMemory'));

  useEffect(() => {
    getGenres(name).then(data => setGenres(data.genres));
    
    if (watchListMemory) {
      setFetchGenres(watchListMemory[0].fetchGenres);
    }
  }, [name])

  useEffect(() => {
    if (watchListMemory) {
      setPage(watchListMemory[0].page);
      setPrevPage(watchListMemory[0].page);
    }else {
      if (page === prevPage) {
        setPage(1);
        setPrevPage(page);
      }
      else setPrevPage(page);
    }
    if (fetchGenres.length === 0) {
      getMostPopular(name, page, startYear, endYear).then(data => {
        setTotalPages(data.total_pages);
        setWatchItems(data.results.filter(item => item.poster_path !== null));
        localStorage.removeItem('watchListMemory');
      })
    }else {

      if (id !== undefined) {
        clearTimeout(id);
      }
  
      setId(setTimeout(() => {
        getMoviesByGenre(fetchGenres.join('%2C'), startYear, endYear, page, name).then(data => {
          setTotalPages(data.total_pages);
          setWatchItems(data.results.filter(item => item.poster_path !== null));
        });
        localStorage.removeItem('watchListMemory');
      }, 500));
    }
  }, [fetchGenres, startYear, endYear, name, page])
  return (
    <section className='categories'>
      <h1 className="categories__title">{name} by genre</h1>
      <FilterCategory genres={genres} setFetchGenres={setFetchGenres} fetchGenres={fetchGenres} />
      <FilterDate startYear={startYear} setStartYear={setStartYear} endYear={endYear} setEndYear={setEndYear} watchListMemory={watchListMemory}/>
      <WatchList watchItems={watchItems} name={name} totalPages={totalPages} genres={genres} startYear={startYear} endYear={endYear} fetchGenres={fetchGenres} page={page}/>
      <Pagination className='pagination' defaultCurrent={page} total={totalPages > 500 ? 5000 : totalPages} current={page} onChange={event => setPage(event)} />
    </section>
  )
}

export default Categories
