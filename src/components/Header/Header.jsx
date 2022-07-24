import { NavLink as Link } from "react-router-dom";
import {useState} from 'react';

import MobileMenu from "../MobileMenu";
import Search from "../Search";
import './Header.css';

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    
    
    <div className="header">

    <button className="mobile-menu__btn" onClick={() => setShowMobileMenu(!showMobileMenu)}><i className="fa-solid fa-bars"></i></button>

    {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}

    <Link to={'/'} className='header__logo'><span>My</span>Cinema</Link>

      <div className="header__navbar">
          <Link to={'/'}>Home</Link>
          <Link to={'/categories/movie'} onClick={() => { localStorage.removeItem('watchListMemory') }}>Movies</Link>
          <Link to={'/categories/tv'} onClick={() => { localStorage.removeItem('watchListMemory') }}>Serials</Link>
          <Link to={'/about'}>About</Link>
      </div>

      {showSearch && <Search showSearch={showSearch} setShowSearch={setShowSearch} />}

      <div className="header__icon">
        <i className="fas fa-search" onClick={() => setShowSearch(!showSearch)}></i>
        <Link to={'/favorites'}><i className="fa-regular fa-heart"></i></Link>
      </div>
    </div>
    
  
  )
}

export default Header