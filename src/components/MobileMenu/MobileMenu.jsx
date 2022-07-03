import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = ({setShowMobileMenu}) => {
  return (
    <div className="mobile-menu">
        <i class="fas fa-times" onClick={() => setShowMobileMenu(false)}></i>
        <div className="mobile-menu__icons">
            <Link to={'/'} className='header__logo' onClick={() => setShowMobileMenu(false)}><span>My</span>Cinema</Link>
        </div>
        <div className="mobile-menu__body ">
            <Link to={'/'} onClick={() => setShowMobileMenu(false)}>Home</Link>
            <Link to={'/categories/movies'} onClick={() => setShowMobileMenu(false)}>Movies</Link>
            <Link to={'/categories/serials'} onClick={() => setShowMobileMenu(false)}>Serials</Link>
            <Link to={'/categories/cartoons'} onClick={() => setShowMobileMenu(false)}>Cartoons</Link>
        </div>
    </div>
  )
}

export default MobileMenu