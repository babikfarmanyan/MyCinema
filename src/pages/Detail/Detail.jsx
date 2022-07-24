import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailById, getOriginalImg, getActorByMovieId, getVideoById, getImgFromDb } from '../../config';
import Actors from '../../components/Actors';
import Loading from '../../components/Loading';
import CategoryList from '../../components/CategoryList';
import "./Detail.css";


const Detail = ({ check, removeFromLocalStorage, addInLocalStorage }) => {


  const [watchDetail, setWatchData] = useState([]);
  const [videos, setVideos] = useState([]);
  const [watchActor, setWatchActor] = useState([]);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [backdrop_path, setBackdropPath] = useState('');
  

  const { id, catName } = useParams('');


  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);


    //checks the status of the movie , liked or not liked
    setLiked(check(id));

    // fetch movie`s data
    getDetailById(id, catName).then(data => {
      setWatchData(data);
      setLoading(false);
    })


    // fetch movie`s video
    getVideoById(id, catName).then(data => {
      setVideos(data.results ? data.results.slice(0, 4) : [])
    })

    // fetch movie`s actors
    getActorByMovieId(id, catName).then(data => {
      setWatchActor(data.cast ? data.cast.slice(0, 7) : [])
    })
    getImgFromDb().then(data => setBackdropPath(data.backdrop_path));

  }, [id]);


  // remove and add movie in localStorages

  function setFavorites(liked) {
    if (liked) {
      removeFromLocalStorage(id);
    } else {
      addInLocalStorage(watchDetail, catName)
    }
    const setLike = !liked;
    setLiked(setLike);
  }



  return (
    loading ? <Loading/> :
    <div>
      
      <div className='detail'>
        <img className='backdrop_path' src={watchDetail.backdrop_path ? getOriginalImg(watchDetail.backdrop_path) : backdrop_path} alt="" />

        <div className="content">

          <img className='poster_path' src={getOriginalImg(watchDetail.poster_path)} alt="" />

          <div className="content-text">

            <h2>{catName === 'movie' ? watchDetail.title : watchDetail.name}</h2>

            <div stayle='display: flex'>
              <p> Release date:  &emsp; {watchDetail.release_date}</p>
              <p> Popularity: &emsp; {watchDetail.popularity}</p>
              {!!watchDetail.production_companies && !!watchDetail.production_companies.length  ? <p> Production Companies: &emsp;  {watchDetail.production_companies[0].name} </p> : ""}

            </div>

            <div className="genreList">
              <p>Genre:</p> {watchDetail.genres.map(item => <span key={item.id}>{item.name} </span> || "null")}
            </div>

            <p className='none' >{watchDetail.overview}</p>

          </div>
          <div className={(liked) ? "iconLike" : "iconNoLike"} >
            <i className="fa-solid fa-heart" onClick={() => setFavorites(liked)}></i>
          </div>

        </div>

      </div>

      {watchActor.length ? <Actors actorsList={watchActor} /> : ""}

      <div className="videosList"> {videos.map(item => (<iframe key={item.key} src={`https://www.youtube.com/embed/${item.key}`}  ></iframe>))} </div>
      <div>
      <CategoryList catName={catName} id={id} similar={true} topRated={false}/>
      </div>
    </div>

  )
}

export default Detail