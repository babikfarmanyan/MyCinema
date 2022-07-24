import { Collapse } from 'antd';
import React from 'react';
import './Collapse.css'

const { Panel } = Collapse;
// const text = `
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa animi quod, expedita facere nemo laudantium quos quidem voluptatibus unde eveniet suscipit harum repellendus beatae. Assumenda, nemo modi! Necessitatibus, animi quibusdam.
// `;

const text = <p className='text'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis dolore illo illum fuga nesciunt, corporis ipsa temporibus ipsum blanditiis eveniet incidunt explicabo recusandae maiores quos! Eum eos nihil ab!
</p>


const Collapses = () => {
  const onChange = (key) => {
  };

  return (
    <>
         <Collapse defaultActiveKey={['0']} onChange={onChange}>
      <Panel header="Babik Farmanyan" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="Meline Khachatryan" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="Zaven Petrosyan" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
    </>
   
  );
};

export default Collapses;