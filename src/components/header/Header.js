import { Link } from "react-router-dom";
import logo from "../../image/logo.svg";
import "./Header.css";

function Header(props) {

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <img src={logo} alt="pink" width={147} height={40}/>
          <ul className="header__list">
            <li className="header__item">
              <Link className="header__link" to="/"> Главная</Link></li>
            <li className="header__item">
              <Link className={`header__link ${props.classCatalog}`} to="/catalog"> Фотографии</Link></li>
            <li className="header__item">
              <Link className={`header__link ${props.classForm}`} to="/form"> Конкурс</Link></li>
            <li className="header__item">
              <a className="header__link" href="https://htmlacademy.ru/" target="_blank" rel="noreferrer"> HTML Academy</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;