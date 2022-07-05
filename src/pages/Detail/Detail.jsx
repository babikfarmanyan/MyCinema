import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetailById, getOriginalImg } from '../../config';
import "./Detail.css";

const Detail = () => {
  const [watchDetail, setWatchData] = useState([]);
  
  const { id, catName } = useParams('');
  const navigate = useNavigate();

  useEffect(() => {
    getDetailById(id, catName).then(data => {
      setWatchData(data); 
    })


  }, [])

  return (
    watchDetail.id &&
    <div className='detail'>
      <img className='backdrop_path' src={watchDetail.backdrop_path ? getOriginalImg(watchDetail.backdrop_path) : 'https://atalian.co.th/wp-content/uploads/sites/21/2019/07/4_Keeping-Up-with-the-Cinema-Cleanliness.png'} alt="" />
      <div className="content">
        <img className='poster_path' src={getOriginalImg(watchDetail.poster_path)} alt="" />
        <div className="content-text">
          <h2>{catName === 'movies' ? watchDetail.title : watchDetail.name}</h2>
          
          <p>{watchDetail.overview}</p>
          <h2>{watchDetail.popularity}</h2>
        </div>
      </div>



    </div>

  )
}

export default Detail