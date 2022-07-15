import { NavLink as Link } from "react-router-dom";
import {useState} from 'react';

import MobileMenu from "../MobileMenu/MobileMenu";
import Search from "../Search";
import './Header.css';
import LogIn from "../LogIn/LogIn"; 

const Header = () => {

  const [showLogin,setShowLogin]=useState(false); 
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false)

  return (
    
    
    <div className="header">

    <button className="mobile-menu__btn" onClick={() => setShowMobileMenu(!showMobileMenu)}><i className="fa-solid fa-bars"></i></button>

    {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}

    <Link to={'/'} className='header__logo'><span>My</span>Cinema</Link>

      <div className="header__navbar">
          <Link to={'/'}>Home</Link>
          <Link to={'/categories/movies'} onClick={() => {
            localStorage.removeItem('watchListMemory')
          }}>Movies</Link>
          <Link to={'/categories/serials'} onClick={() => localStorage.removeItem('watchListMemory')}>Serials</Link>
          <Link to={'/about'}>About</Link>
      </div>

      {showSearch && <Search showSearch={showSearch} setShowSearch={setShowSearch} />}

      <div className="header__icon">
        <i className="fas fa-search" onClick={() => setShowSearch(!showSearch)}></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-user" /* onClick={()=>setShowLogin(true)} */></i>
      </div>
      {showLogin && <LogIn setShowLogin={setShowLogin}/>}
    </div>
    
  
  )
}

export default Header