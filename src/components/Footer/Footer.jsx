import { NavLink as Link } from "react-router-dom";
import './Footer.css'
import About from "../../pages/About";

const Footer = () => {
  return (
    <footer>
      <div className="footer__navlinks">
            <h3>Navlinks</h3>
            <div className="navlink-box">
                <Link to={'/'}>Home</Link> 
                <Link to={'/categories/movie'}>Movies</Link>
                <Link to={'/categories/tv'}>Serials</Link>
                <Link to={'/about'}>About</Link> 
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

    </footer>
  )
}

export default Footer