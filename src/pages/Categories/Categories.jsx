import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from 'antd';

import {getGenres, getMoviesByGenre} from '../../config'

import FilterDate from '../../components/FilterDate';
import FilterCategory from '../../components/FilterCategory';
import WatchList from '../../components/WatchList/WatchList';
import Loading from '../../components/Loading';

import './Categories.css';

const Categories = () => {

  const {name} = useParams('');

  const [startYear, setStartYear] = useState(1900);
  const [endYear, setEndYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [fetchGenres, setFetchGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [filterClick, setFilterClick] = useState(false);
  const [loading, setLoading] = useState(true);
  const [watchItems, setWatchItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [id, setId] = useState(undefined);

  let watchListMemory = JSON.parse(localStorage.getItem('watchListMemory'));

  useEffect(() => {
    getGenres(name).then(data => setGenres(data.genres));
    if (watchListMemory) {
      setPage(watchListMemory[0].page);
      setFetchGenres(watchListMemory[0].fetchGenres);
      setStartYear(watchListMemory[0].startYear);
      setEndYear(watchListMemory[0].endYear);
    }else {
      setFetchGenres([]);
      setPage(1);
      setEndYear(2022);
      setStartYear(1900);
      setId(undefined);
    };
  
  }, [name])

  useEffect(() => {
    if (filterClick) {
      setFilterClick(false);
      setPage(1);
    };

    setLoading(true);
    
    if (id !== undefined) {
      clearTimeout(id);
    }
    setId(
      setTimeout(() => {
        getMoviesByGenre(fetchGenres.join('%2C'), startYear, endYear, page, name).then(data => {
          setTotalPages(data.total_pages);
          setWatchItems(data.results.filter(item => item.poster_path !== null));
          setLoading(false);
          localStorage.setItem('watchListMemory', JSON.stringify(
            [
              {
                startYear: startYear,
                endYear: endYear,
                fetchGenres: fetchGenres,
                page: page
              }
            ]
          ))
        })
      }, 500)
    )

  }, [fetchGenres, page, startYear, endYear])


  return (
    <section className='categories'>
      <h1 className="categories__title">{name === 'tv' ? 'serials' : 'movies'} by genre</h1>
      <FilterCategory genres={genres} setFetchGenres={setFetchGenres} fetchGenres={fetchGenres} setFilterClick={setFilterClick}/>
      <FilterDate startYear={startYear} setStartYear={setStartYear} endYear={endYear} setEndYear={setEndYear} setFilterClick={setFilterClick}/>
      {loading ? <Loading />:<WatchList watchItems={watchItems} name={name} genres={genres}/> }
      <Pagination className='pagination' defaultCurrent={page} total={totalPages > 500 ? 5000 : totalPages} current={page} onChange={event => {
        window.scrollTo(0, 0);
        setPage(event)
      }} />
    </section>
  )
}

export default Categories
