import 'antd/dist/antd.css';
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

const FilterDate = ({startYear, setStartYear, endYear, setEndYear, watchListMemory}) => {
  return (
    <>
      <Select
      labelInValue
      placeholder='last date'
      defaultValue={watchListMemory ? watchListMemory[0].endYear : null}
      style={{
        width: 120,
      }}
      onChange={option => setEndYear(option.value)}
    >
      {
          optionArray.map(option => option)        
      }
      </Select>
      <Select
      labelInValue
      placeholder='start year'
      defaultValue={watchListMemory ? watchListMemory[0].startYear : null}
      style={{
        width: 120,
      }}
      onChange={option => setStartYear(option.value)}
    >
      {
          optionArray.map(option => option)        
      }
      </Select>
    </>
  );
};

export default FilterDate;