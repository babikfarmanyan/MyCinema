
import React from 'react';
import { useState, useEffect} from 'react';
import { getDetailById } from '../../config';


const Favorites = () => {

  const [favorite, setFavoriteList] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favorites'));
    setFavoriteList(items);
   

  }, []);
  console.log(favorite);
  return (
    <div>
    {favorite.forEach(id => getDetailById(id))}</div>
  )
}

export default Favorites