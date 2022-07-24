import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { useState, useEffect } from 'react';
import {getMostPopular, getGenres} from '../../config';

import './Slider.css';
import SliderItem from '../SliderItem';

const Slider = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMostPopular('movie').then(data => setPopularMovies(data.results.slice(0, 10)));
    getGenres('movie').then(genres => setGenres(genres.genres));
  }, [])

  return (
    <Carousel className='slider' autoplay>
      {
        popularMovies.map((movie, index) => {
          return (
           <SliderItem key={index} movie={movie} genres={genres} />
          )
        })
      }
    </Carousel>
  )
}

export default Slider