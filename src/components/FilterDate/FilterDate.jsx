import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;
const date = new Date;
const dateNow = date.getFullYear();

const optionArray = [];

for (let i = dateNow; i >= 1800; i--) {
    optionArray.push(
        <Option key={i} value={i}>{i}</Option>
    )
}

const FilterDate = ({setStartYear, setEndYear}) => {
  return (
    <>
      <Select
      labelInValue
      defaultValue={{
        value: `${dateNow}`,
        label: `${dateNow}`,
      }}
      style={{
        width: 120,
      }}
      onChange={(option) => setEndYear(option.value)}
    >
      {
          optionArray.map(option => option)        
      }
      </Select>
      <Select
      labelInValue
      defaultValue={{
        value: '1800',
        label: '1800',
      }}
      style={{
        width: 120,
      }}
      onChange={(option) => setStartYear(option.value)}
    >
      {
          optionArray.map(option => option)        
      }
      </Select>
    </>
  );
};

export default FilterDate;