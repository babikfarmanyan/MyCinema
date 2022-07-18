import './FilterCategory.css';
import { Select } from 'antd';

const FilterCategory = ({genres, setFetchGenres, fetchGenres, setFilterClick}) => {

  const { Option } = Select;

  genres = genres.map(genre => (
    <Option key={genre.id}>{genre.name}</Option>
  ))

  return (
    <Select className='category-filter'
    mode="tags"
    placeholder='Most popular'
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