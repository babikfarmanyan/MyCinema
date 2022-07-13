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
  const [watchItems, setWatchItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [id, setId] = useState(undefined);

  useEffect(() => {
    getGenres(name).then(data => setGenres(data.genres));
    setPage(1);
  }, [name])

  useEffect(() => {
    setPage(1);
    if (fetchGenres.length === 0) {
      getMostPopular(name, page, startYear, endYear).then(data => {
        setTotalPages(data.total_pages);
        setWatchItems(data.results.filter(item => item.poster_path !== null))
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
      }, 800));
    }

  }, [fetchGenres, startYear, endYear, name])


  useEffect(() => {
    if (fetchGenres.length === 0) {
      getMostPopular(name, page, startYear, endYear).then(data => {
        setTotalPages(data.total_pages);
        setWatchItems(data.results.filter(item => item.poster_path !== null))
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
      }, 800));
    }

  }, [page])
  return (
    <section className='categories'>
      <h1 className="categories__title">{name} by genre</h1>
      <FilterCategory genres={genres} setFetchGenres={setFetchGenres} />
      <FilterDate setStartYear={setStartYear} setEndYear={setEndYear} />
      <WatchList watchItems={watchItems} name={name} genres={genres}/>
      <Pagination className='pagination' defaultCurrent={page} total={totalPages > 500 ? 5000 : totalPages} current={page} onChange={event => setPage(event)} />
    </section>
  )
}

export default Categories