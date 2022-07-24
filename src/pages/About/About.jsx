import React from 'react';
import './About.css';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading'
import Collapse from '../../components/Collapse';



const About = () => {

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
    <div className='About'>
       <div className="about_head">
          {loading ? <Loading /> : 
          <img src={img.about_img} alt="nkar"/> }
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, accusamus odit? Repellat molestiae totam rem!.</p>
       </div>
  
    <div className="about_body">
        <h2>Lorem ipsum dolor sit amet..</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione laudantium tempora tenetur eius inventore magnam numquam itaque animi. Iure et repudiandae non unde expedita iusto, eius fugit vitae voluptate repellendus reiciendis enim accusamus inventore, illum maiores deleniti natus quibusdam!.</p>
    </div>

      <Collapse />
  </div>
  )
  }


export default About