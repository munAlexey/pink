import "./Offer.css";
import phone1 from "../../image/phone-1.png";
import phone2 from "../../image/phone-2.png";
import phone3 from "../../image/phone-3.png";
import timer from "../../image/timer.svg";

function Offer(props) {
  return (
    <section className="offer">
      <h2 className="offer__header-title container">
        Устали от серости мегаполиса? Нам есть, что вам предложить!
      </h2>
      <div className="offer__block">
        <ul className="offer__list container">
          <li className="offer__phone-item">
            <img src={phone3} alt="phone" />
          </li>
          <li className="offer__phone-item">
            <img src={phone2} alt="phone" />
          </li>
          <li className="offer__phone-item">
            <img src={phone1} alt="phone" />
          </li>
        </ul>
        <ul className="offer__list container">
          <li className="offer__text-item">
            <h3 className="offer__title">Поднимает настроение</h3>
            <p className="offer__subtitle">
              Приложение позволит вам победить осеннюю хандру и депрессию
              буквально в несколько кликов!
            </p>
          </li>
          <li className="offer__text-item">
            <h3 className="offer__title">Меняет мир вокруг</h3>
            <p className="offer__subtitle">
              Сделайте снимок и украсьте его смайликом или текстовой подписью,
              чтобы усилить эффект
            </p>
          </li>
          <li className="offer__text-item">
            <h3 className="offer__title">Заводит новых друзей</h3>
            <p className="offer__subtitle">
              Ставьте лайки, комментируйте, делитесь фотографиями с друзьями и
              заводите новых
            </p>
          </li>
        </ul>
        <div className="offer__timer container">
          <img src={timer} alt="timer" width={298} height={345} />
          <div className="offer__timer-block">
            <h2 className="offer__title-timer">Эффект на 24 часа!</h2>
            <p className="offer__subtitle-timer">
              Британские ученые провели исследования и доказали, что
              положительный эффект от использования приложения длится целые
              сутки!
            </p>
            <a href="#" className="offer__subtitle-timer offer__subtitle-link">
              Узнать больше об исследовании
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
