import React from 'react'
import CaregoryList from '../../components/CategoryList/CaregoryList';
import { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { getDetailById, getOriginalImg, getActorByMovieId,getVideoById } from '../../config';
import "./Detail.css";
import Actors from '../../components/Actors/Actors';

const Detail = () => {
  const [watchDetail, setWatchData] = useState([]);
  const [videos,setVideos] = useState([]);
  const [watchActor, setWatchActor] = useState([]);
  const [favoritesArr , setFavoritesArr]=useState([]);
  
  const { id, catName } = useParams('');

  useEffect(() => {
    window.scrollTo(0, 0)
    getDetailById(id, catName).then(data => {
      setWatchData(data)
    })
    getVideoById(id,catName).then(data=>{
      setVideos(data.results ? data.results.slice(0,4) : [])
    })
    getActorByMovieId(id).then(data=>{
      setWatchActor(data.cast ? data.cast.slice(0, 6) : [] )
    })

  }, [id])

   

 
  return (
    watchDetail.id && 
<div>
    <div className='detail'>
      <img className='backdrop_path' src={watchDetail.backdrop_path ? getOriginalImg(watchDetail.backdrop_path) : 'https://atalian.co.th/wp-content/uploads/sites/21/2019/07/4_Keeping-Up-with-the-Cinema-Cleanliness.png'} alt="" />
     
      <div className="content">
       
        <img className='poster_path' src={getOriginalImg(watchDetail.poster_path)} alt="" />
       
        <div className="content-text">
         
            <h2>{catName === 'movies' ? watchDetail.title : watchDetail.name}</h2>
            <div className="iconLike" onClick={localStorage.setItem("favorites",JSON.stringify(watchDetail.id))}>
              <i className="fa-solid fa-heart"></i>
            </div>
            
            <div stayle='display: flex'>
            <p> Release date:  &emsp; {watchDetail.release_date}</p>
            <p> Popularity: &emsp;  {watchDetail.popularity}</p> 
            {watchDetail.production_companies.length ? <p> Production Companies: &emsp;  {watchDetail.production_companies[0].name } </p> : "" }
      
            </div>

            <div className="genreList">
            <p>Genre:</p> {watchDetail.genres.map(item => <span key={item.id}>{item.name} </span>  || "null")}
          
            </div>
           
             
            <p>{watchDetail.overview}</p>  
           
        </div>

  
            </div>
    
  </div>
  {watchActor.length ? <Actors actorsList={watchActor}/> : ""}
            
 
  
  <div className="videosList">
    {videos.map(item => ( <iframe key={item.key} src={`https://www.youtube.com/embed/${item.key}`}  ></iframe>))}
    
  </div>


        <CaregoryList catName={catName} id={id} similar={true} topRated={false}  genreId={watchDetail.genres[0].id}/>

</div>  

  )
}

export default Detail