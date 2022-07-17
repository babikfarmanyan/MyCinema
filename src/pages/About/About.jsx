import React from 'react';
import './About.css';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading';


const About = () => {


  const [img, setImg] = useState();
  const [loading, setLoading] = useState(true);
  // const [span, setSpan] = useState('');

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
         
     <div class="our_goal">
      {loading ? <Loading /> : 
        <img src={img.about_img} alt="nkar"/> }
        <p>We’re on a mission to create a global community where everyone can discover, experience, and share all of the entertainment that matters to them.</p>
    </div>

    <div class="about_body">
        <h2>We’re fans at heart.</h2>
        <p>Of movies, shows, music, and well, all things entertainment. So much so that we built an app that brings it all together—streaming services, personal media, ratings and watch lists. As beautiful as it is easy-to-use, Plex gives fans everywhere a way to discover, save, and enjoy the entertainment they love the most.</p>
    </div>

 

    <div className='about_us'>
      <div className='name'>
        <h2>Babik Farmanyan</h2>
        {/* <button className='btn' onClick={showInfo}>+</button> */}
      </div>
      <span className='hide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur earum numquam similique odit nihil repellat provident. Laudantium accusantium inventore dicta vero eaque officia deleniti esse consequuntur ipsam odio. Cupiditate!.</span>
      
    </div>

    <div className='about_us'>
      <div className='name'>
        <h2>Meline Khachatryan</h2>
        {/* <button className='btn' onClick={showInfo}>+</button> */}
      </div>
      <span className='hide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur earum numquam similique odit nihil repellat provident. Laudantium accusantium inventore dicta vero eaque officia deleniti esse consequuntur ipsam odio. Cupiditate!.</span>
      
    </div>

    <div className='about_us'>
      <div className='name'>
        <h2>Zaven Petrosyan</h2>
        {/* <button className='btn' onClick={showInfo}>+</button> */}
      </div>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur earum numquam similique odit nihil repellat provident. Laudantium accusantium inventore dicta vero eaque officia deleniti esse consequuntur ipsam odio. Cupiditate!.</span>
      
    </div>
    


    <h4>Lorem ipsum dolor sit amet.</h4>
    <ul>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure distinctio ea beatae aliquam labore voluptatum aspernatur nihil accusantium eligendi cupiditate.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure distinctio ea beatae aliquam labore voluptatum aspernatur nihil accusantium eligendi cupiditate.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure distinctio ea beatae aliquam labore voluptatum aspernatur nihil accusantium eligendi cupiditate.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure distinctio ea beatae aliquam labore voluptatum aspernatur nihil accusantium eligendi cupiditate.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure distinctio ea beatae aliquam labore voluptatum aspernatur nihil accusantium eligendi cupiditate.</li>
    </ul></div>
  )
  }


export default About