import "./Promo.css";
import bg from "../../image/Component 1.png";
import apple from "../../image/apple.svg";
import android from "../../image/android.svg";
import microsoft from "../../image/microsoft.svg";

function Promo(props) {
  return (
    <section className="promo container">
      <div className="promo__block">
        <h2 className="promo__title">Взгляните на жизнь иначе!</h2>
        <button className="promo__btn" type="button">Скачать приложение</button>
        <ul className="promo__list">
          <li className="promo__item">
            <img src={apple} alt="apple" width={47} height={56} />
          </li>
          <li className="promo__item">
            <img src={android} alt="android" width={43} height={47} />
          </li>
          <li className="promo__item">
            <img src={microsoft} alt="microsoft" width={44} height={41} />
          </li>
        </ul>
        <p className="promo__subtitle">
          Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8
        </p>
      </div>
      <img src={bg} alt="hand" className="promo__bg" />
    </section>
  );
}

export default Promo;
