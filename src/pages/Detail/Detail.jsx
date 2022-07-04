import React from 'react'
import { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getDetailById, getOriginalImg } from '../../config';
import "./Detail.css";

const Detail = () => {
   const [watchDetail, setWatchData] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
     getDetailById(id).then(data=>{
      setWatchData(data);
      console.log(data);
      
     })
    

  }, [id])  

  return (

    <div> 
     <h2>{watchDetail.original_title}</h2> 
     <h2>{watchDetail.overview}</h2> 
      <h2>{watchDetail.popularity}</h2>
      <img src={getOriginalImg(watchDetail.poster_path)} alt="" />

    </div>
    
  )
}

export default Detail