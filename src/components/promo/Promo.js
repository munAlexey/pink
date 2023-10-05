import "./Promo.css";
import bg from "../../image/Component 1.png";
import apple from "../../image/apple.svg";
import android from "../../image/android.svg";
import microsoft from "../../image/microsoft.svg";

function Promo(props) {
  return (
    <section className="promo container">
      <div className="promo__block">
        <h2>Взгляните на жизнь иначе!</h2>
        <button type="button">Скачать приложение</button>
        <ul>
          <li>
            <img src={apple} alt="apple" />
          </li>
          <li>
            <img src={android} alt="android" />
          </li>
          <li>
            <img src={microsoft} alt="microsoft" />
          </li>
        </ul>
        <p>
          Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8
        </p>
      </div>
      <img src={bg} alt="hand" className="promo__bg" />
    </section>
  );
}

export default Promo;
