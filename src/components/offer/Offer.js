import "./Offer.css";
import phone1 from "../../image/phone-1.png";
import phone2 from "../../image/phone-2.png";
import phone3 from "../../image/phone-3.png";

function Offer(props) {
  return (
    <section className="offer">
      <h2 className="offer__header-title container">Устали от серости мегаполиса? Нам есть, что вам предложить!</h2>
      <div className="offer__block">
        <ul className="offer__list container">
          <li>
            <img src={phone3} alt="phone" />
          </li>
          <li>
            <img src={phone2} alt="phone" />
          </li>
          <li>
            <img src={phone1} alt="phone" />
          </li>
        </ul>
        <ul className="offer__list container">
          <li>
            <h3>Поднимает настроение</h3>
            <p>
              Приложение позволит вам победить осеннюю хандру и депрессию
              буквально в несколько кликов!
            </p>
          </li>
          <li>
            <h3>Меняет мир вокруг</h3>
            <p>
              Сделайте снимок и украсьте его смайликом или текстовой подписью,
              чтобы усилить эффект
            </p>
          </li>
          <li>
            <h3>Заводит новых друзей</h3>
            <p>
              Ставьте лайки, комментируйте, делитесь фотографиями с друзьями и
              заводите новых
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Offer;
