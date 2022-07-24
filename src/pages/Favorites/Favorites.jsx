
import React from 'react';
import FavoriteItem from '../../components/FavoritesItem/FavoritesItem';
import "./Favorites.css"


const Favorites = () => {

  const watchData = JSON.parse(localStorage.getItem('favorites'));
  return (


    <div>

       <h2 className='title'> Your Favorites</h2> 
          <div className='fav_list'>
            {watchData && watchData.length ? watchData.map(watchItem => (
                             <FavoriteItem key={watchItem.id} watchItem={watchItem}/>)) 
                            : <p className='emptyFVList'>You don't have any favorite movies : 	&#040;</p>
            }
          </div>
    </div>
  )
}

export default Favorites