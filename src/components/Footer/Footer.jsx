import { NavLink as Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__navlinks">
            <h3>Navlinks</h3>
            <div className="navlink-box">
                <Link to={'/'}>Home</Link> 
                <Link to={'/categories/movies'}>Movies</Link>
                <Link to={'/categories/serials'}>Serials</Link>
                <Link to={'/categories/cartons'}>Cartons</Link> 
            </div>
        </div>

        <div className="footer__categories">
            <h3>Categories</h3>
            <div className="category-box">
                <Link to={'/categories/comedy'}>Comedy</Link>
                <Link to={'/categories/drama'}>Drama</Link>
                <Link to={'/categories/action'}>Action</Link>
                <Link to={'/categories/vestern'}>Western</Link>
                <Link to={'/categories/detective'}>Detective</Link>
            </div>
        </div>

        <div className="footer__contact">
            <h3>Contact Us</h3>
            <div className="contact-box">
                <a href="#"><i className="fa-regular fa-envelope"></i></a>
                <a href="#"><i className="fa-regular fa-paper-plane"></i></a>
                <a href="#"><i className="fa-solid fa-phone-flip"></i></a>
                <a href="https://www.youtube.com/" target={"_blank"}><i className="fa-brands fa-youtube"></i></a>
                <a href="https://www.facebook.com" target={"_blank"}><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i className="fa-brands fa-viber"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>

    </div>
  )
}

export default Footer