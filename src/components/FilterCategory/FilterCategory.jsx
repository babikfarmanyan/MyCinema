import React from 'react';
import './FilterCategory.css';
import { Select } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';

const FilterCategory = ({genres, setFetchGenres, fetchGenres, setFilterClick}) => {

  const { Option } = Select;

  genres = genres.map(genre => (
    <Option key={genre.id}>{genre.name}</Option>
  ))

  return (
    <Select className='category-filter'
    mode="tags"
    placeholder='Select genre'
    onChange={(event) => {
      setFilterClick(true);
      setFetchGenres(event)
    }}
    tokenSeparators={[',']}
    value={fetchGenres}
  >
    {genres}
  </Select>
  )
};

export default FilterCategory;