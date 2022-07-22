import React from 'react';
import './About.css';
import Collapse from '../../components/Collapse';
import About_body from '../../components/About_body/About_body';
import About_head from '../../components/About_head/About_head';




const About = () => {

  return (
    <div className='About'>
      <About_head />
      <About_body />
      <Collapse />
  </div>
  )
  }


export default About