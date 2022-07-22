import React from 'react'
import { useState, useEffect } from 'react';
import Loading2 from '../Loading2';
// import <Loading2></Loading2> from '../Loading';
import './About_head.css'

const About_head = () => {

  const [img, setImg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    fetch("http://localhost:3000/images")
    .then(response => response.json())
    .then(json => {
      setImg(json);
      setLoading(false);
    })
    .catch(error=> console.log(error));
  },[]);

  return (


     <div class="our_goal">
      {loading ? <Loading2 /> : 
        <img src={img.about_img} alt="nkar"/> }
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, accusamus odit? Repellat molestiae totam rem!.</p>
    </div>
 

  )
}

export default About_head;