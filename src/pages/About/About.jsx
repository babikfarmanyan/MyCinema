import React from 'react';
import './About.css';
import Collapse from '../../components/Collapse';
import About_body from '../../components/About_body/About_body';
import Our_goal from '../../components/Our_goal/Our_goal';
import About_bottom from '../../components/About_bottom/About_bottom';



const About = () => {

  return (
    <div className='About'>
      <Our_goal />
      <About_body />
      <Collapse />
      <About_bottom />
  </div>
  )
  }


export default About