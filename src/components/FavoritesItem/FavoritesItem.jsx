import React from 'react'
import { NavLink as Link } from "react-router-dom"
import {getW500Img} from '../../config';
import "./FavoritesItem.css";


const FavoriteItem = ({watchItem,removeFromLocalStorage}) => {
  

  return (
    <div className="favorite_item">
    <Link  to={`/${watchItem.catName}/${watchItem.id}`}>
     <div className="favorite__item__img">
        <img src={getW500Img(watchItem.poster_path)} alt="" />
      </div>
      <div className="favorite__item__content">
       
      <h2>{watchItem.catName === 'movie' ? watchItem.title : watchItem.name}</h2>
             <div>
             <p>{watchItem.release_date}</p>
             <p>{watchItem.popularity}</p>
             </div>
 
             
             <div className="genreList">
             {watchItem.genres.map(item => <span key={item.id}>{item.name} </span>  || "null")}
             </div>  
      </div>
    </Link>
    </div>
  )
}

export default FavoriteItem