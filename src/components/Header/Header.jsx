import { NavLink as Link } from "react-router-dom"
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to={'/'}><span>My</span>Cinema</Link>
      </div>
{/* 
      <button className="burger-btn"><i className="fa-solid fa-bars"></i></button>

      <div className="burger-menu">
        <div className="burger-menu__icons">
            <i className="fa-solid fa-bars"></i>
            <Link to={'/'}><span>My</span>Cinema</Link>
        </div>
        <div className="burger-menu__body ">
            <Link to={'/'}>Home</Link>
            <Link to={'/categories/movies'}>Movies</Link>
            <Link to={'/categories/serials'}>Serials</Link>
            <Link to={'/categories/cartoons'}>Cartoons</Link>
        </div>

      </div> */}

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