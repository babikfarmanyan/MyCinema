import { NavLink as Link } from "react-router-dom";
import {useState} from 'react';

import MobileMenu from "../MobileMenu/MobileMenu";
import './Header.css';

const Header = () => {

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

      <div className="header__icon">
        <form>
        <input type="search" className="header__search" placeholder="Search..."/>
        </form>

        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-user"></i>
      </div>

    </div>
  )
}

export default Header