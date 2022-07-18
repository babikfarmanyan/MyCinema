import './FilterDate.css'
import { Select } from 'antd';

const { Option } = Select;
const date = new Date;
const dateNow = date.getFullYear();

const optionArray = [];

for (let i = dateNow; i >= 1900; i--) {
    optionArray.push(
        <Option key={i} value={i}>{i}</Option>
    )
}

const FilterDate = ({startYear, setStartYear, endYear, setEndYear, watchListMemory, setFilterClick}) => {
  return (
    <>
      <Select className='year-from'
      labelInValue
      value={{
        value: startYear,
        label: startYear
      }}
      onChange={option => {
        setFilterClick(true);
        setStartYear(option.value)
      }}
    >
      {
          optionArray.map(option => option)        
      }
      </Select>
      <Select className='year-to'
      labelInValue
      placeholder='2022'
      value={{
        value: endYear,
        label: endYear
      }}
      onChange={option => {
        setFilterClick(true);
        setEndYear(option.value)
      }}
    >
      {
          optionArray.map(option => option)        
      }
      </Select>
    </>
  );
};

export default FilterDate;