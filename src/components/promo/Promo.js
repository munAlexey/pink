import "./Promo.css";
import bg from "../../image/Component 1.png";
import apple from "../../image/apple.svg";
import android from "../../image/android.svg";
import microsoft from "../../image/microsoft.svg";

function Promo(props) {
  let { isMain } = props;

  return (
    <>
      {isMain ? (
        <section className="promo container">
          <div className="promo__block">
            <h2 className="promo__title">Взгляните на жизнь иначе!</h2>
            <button className="promo__btn" type="button">
              Скачать приложение
            </button>
            <ul className="promo__list">
              <li className="promo__item">
                <a href="#">
                  <img src={apple} alt="apple" width={47} height={56} />
                </a>
              </li>
              <li className="promo__item">
                <a href="#">
                  <img src={android} alt="android" width={43} height={47} />
                </a>
              </li>
              <li className="promo__item">
                <a href="#">
                  <img src={microsoft} alt="microsoft" width={44} height={41} />
                </a>
              </li>
            </ul>
            <p className="promo__subtitle">
              Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8
            </p>
          </div>
          <img src={bg} alt="hand" className="promo__bg" />
        </section>
      ) : (
        <section className="promo-catalog container">
          <h2 className={`${props.class}`}>{props.title}</h2>
        </section>
      )}
    </>
  );
}

export default Promo;
