import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

  return (
    <div className='NotFound'>
        <button className='btn' onClick={() =>navigate(-1)}><i className="fa-solid fa-left-long"></i></button>
        
        <h2>Not found 404 :&#040;</h2>
    </div>
  )
}

export default NotFound