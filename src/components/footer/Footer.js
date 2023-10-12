import "./Footer.css";
import logo from "../../image/footer-logo.svg";
import twitter from "../../image/twitter.svg";
import fb from "../../image/fb.svg";
import yt from "../../image/you.svg";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="footer container">
      <div className="footer__block">
        <Link to="/"><img src={logo} alt="logo" width={147} height={40} /></Link>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li className="footer__item">
            <a href="#">
              <img src={fb} alt="twitter" />
            </a>
          </li>
          <li className="footer__item">
            <a href="#">
              <img src={yt} alt="twitter" />
            </a>
          </li>
        </ul>
        <p className="footer__text">Разработано</p>
      </div>
    </footer>
  );
}

export default Footer;
