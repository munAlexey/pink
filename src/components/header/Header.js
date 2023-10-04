import { Link } from "react-router-dom";
import logo from "../../image/logo.svg";

function Header(props) {

  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="pink" width={147} height={43}/>
        <ul>
          <li>
            <Link to="/"> Главная</Link></li>
          <li>
            <Link to="/catalog"> Фотографии</Link></li>
          <li>
            <Link to="/form"> Конкурс</Link></li>
          <li>
            <a href="https://htmlacademy.ru/" target="_blank" rel="noreferrer"> HTML Academy</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;