import React from 'react'
import { useState, useEffect } from 'react';
import Loading from '../Loading';
import './Our_goal.css'

const Our_goal = () => {

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
      {loading ? <Loading /> : 
        <img src={img.about_img} alt="nkar"/> }
        <p>We’re on a mission to create a global community where everyone can discover, experience, and share all of the entertainment that matters to them.</p>
    </div>
 

  )
}

export default Our_goal;