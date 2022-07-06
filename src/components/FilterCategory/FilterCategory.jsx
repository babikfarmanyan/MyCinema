import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

// const { Option } = Select;
// const children = [];

// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

const FilterCategory = ({genres, setFetchGenres}) => {

  const { Option } = Select;
  const children = [];

  genres = genres.map(genre => (
    <Option key={genre.id}>{genre.name}</Option>
  ))

  return (
    <Select
    mode="tags"
    style={{
      width: '200px',
    }}
    onChange={(event) => setFetchGenres(event)}
    tokenSeparators={[',']}
  >
    {genres}
  </Select>
  )
};

export default FilterCategory;