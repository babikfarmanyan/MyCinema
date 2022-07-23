
import React from 'react';
import FavoriteItem from '../../components/FavoritesItem/FavoritesItem';
import "./Favorites.css"


const Favorites = () => {

  const watchDataTV = JSON.parse(localStorage.getItem('serials'));
  const watchDataMovie = JSON.parse(localStorage.getItem('movies'));

  
  return (


    <div> 

    <h2>Movies</h2>
    <div  className='fav_list'>
       { watchDataMovie ?
      watchDataMovie.map(watchItem => (
        <FavoriteItem key={watchItem.id} watchItem={watchItem} catName={"movies"}/>
      )) : ""
    }
     </div> 
     <h2>Serials</h2>
     <div className='fav_list'>
       { watchDataTV ?
      watchDataTV.map(watchItem => (
        <FavoriteItem key={watchItem.id} watchItem={watchItem} catName={"serials"}/>
      )) : ""
    }
     </div> 
    
         
      </div>
  )
}

export default Favorites