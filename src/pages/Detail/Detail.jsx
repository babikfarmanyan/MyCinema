import React from 'react'
import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetailById, getOriginalImg, getActorByMovieId } from '../../config';
import "./Detail.css";

const Detail = () => {
  const [watchDetail, setWatchData] = useState([]);
  const [watchActor, setWatchActor] = useState([]);
  
  const { id, catName } = useParams('');

  useEffect(() => {
    getDetailById(id, catName).then(data => {
      setWatchData(data); 
      data.genres.map((item) => console.log(item))
    })
 
  }, [id])

 getActorByMovieId(id).then(data=>{
        setWatchActor(data.cast.slice(0, 6));
      /*  console.log(data.cast.map(item=> item.profile_path)); */

      })
  return (
    watchDetail.id && 
<div>
    <div className='detail'>
      <img className='backdrop_path' src={watchDetail.backdrop_path ? getOriginalImg(watchDetail.backdrop_path) : 'https://atalian.co.th/wp-content/uploads/sites/21/2019/07/4_Keeping-Up-with-the-Cinema-Cleanliness.png'} alt="" />
     
      <div className="content">
       
        <img className='poster_path' src={getOriginalImg(watchDetail.poster_path)} alt="" />
       
        <div className="content-text">
         
            <h2>{catName === 'movies' ? watchDetail.title : watchDetail.name}</h2>
            <i class="fa-solid fa-heart"></i>
            <div stayle='display: flex'>
            <p> Release date:  &emsp; {watchDetail.release_date}</p>
            <p> Popularity: &emsp;  {watchDetail.popularity}</p> 
            </div>

            <div className="genreList">
            <p>Genre:</p> {watchDetail.genres.map(item => <span>{item.name} </span>  || "null")}
          
            </div>
           
             
            <p>{watchDetail.overview}</p>  
           
        </div>
      
{/* 
      <div className="logoList">
          {watchDetail.production_companies.map(item =>  item.logo_path && <img className='logo_path' src={getOriginalImg(item.logo_path) || "null"} alt=""/> 
                  )}  
            </div> */}
            </div>
    
  </div>

  <div className="actorsList">
          {watchActor.map(item => {
                    return (<React.Fragment key={item.id}>  <div className='actors'><img className='imgActor' src={getOriginalImg(item.profile_path)} alt=""/> <h2>{item.name}</h2></div> </React.Fragment>)
                  })}  
  </div>
</div>  

  )
}

export default Detail