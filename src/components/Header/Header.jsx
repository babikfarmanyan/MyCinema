import { NavLink as Link } from "react-router-dom";
import {useState} from 'react';

import MobileMenu from "../MobileMenu/MobileMenu";
import './Header.css';
import LogIn from "../LogIn/LogIn"; 

const Header = () => {

  const [showLogin,setShowLogin]=useState(false); 
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    
    
    <div className="header">

    <button className="mobile-menu__btn" onClick={() => setShowMobileMenu(!showMobileMenu)}><i className="fa-solid fa-bars"></i></button>

    {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}

    <Link to={'/'} className='header__logo'><span>My</span>Cinema</Link>

      <div className="header__navbar">
          <Link to={'/'}>Home</Link>
          <Link to={'/categories/movies'}>Movies</Link>
          <Link to={'/categories/serials'}>Serials</Link>
          <Link to={'/categories/cartoons'}>Cartoons</Link>
      </div>

      <input type="search" className="header__search" placeholder="Search..."/>

      <div className="header__icon">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-user" onClick={()=>setShowLogin(true)}></i>
      </div>
      {showLogin && <LogIn setShowLogin={setShowLogin}/>}
    </div>
    
  
  )
}

export default Header