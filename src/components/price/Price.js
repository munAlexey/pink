import "./Price.css";
import dis from "../../image/dis.svg";
import check from "../../image/check-green.svg";

function Price(props) {
  return (
    <section className="price">
      <div className="price__block container">
        <ul className="price__list">
          <li className="price__item price__item-1#E$">
            <h3 className="price__tag">База</h3>
            <p className="price__cost">1,99 USD</p>
          </li>
          <li className="price__item">
            <span className="price__hit">ХИТ</span>
            <h3 className="price__tag">СТАНДАРТ</h3>
            <p className="price__cost">3,99 USD</p>
          </li>
          <li className="price__item price__item-3">
            <h3 className="price__tag">АНЛИМ</h3>
            <p className="price__cost">9,99 USD</p>
          </li>
        </ul>
        <div className="price__table">
          <ul className="price__table-row">
            <li className="price__title">Розовый фильтр</li>
            <li className="price__checkbox">
              <img src={check} alt="check" width={31} height={21} />
            </li>
            <li className="price__checkbox">
              <img src={check} alt="check" width={31} height={21} />
            </li>
            <li className="price__checkbox">
              <img src={check} alt="check" width={31} height={21} />
            </li>
          </ul>
          <ul className="price__table-row">
            <li className="price__title">Смайлики</li>
            <li className="price__checkbox">
              <img src={dis} alt="cancel" width={27} height={27} />
            </li>
            <li className="price__checkbox">
              <img src={check} alt="check" width={31} height={21} />
            </li>
            <li className="price__checkbox">
              <img src={check} alt="check" width={31} height={21} />
            </li>
          </ul>
          <ul className="price__table-row">
            <li className="price__title">Комментарии</li>
            <li className="price__checkbox">
              <img src={dis} alt="cancel" width={27} height={27} />
            </li>
            <li className="price__checkbox">
              <img src={dis} alt="cancel" width={27} height={27} />
            </li>
            <li className="price__checkbox">
              <img src={check} alt="check" width={31} height={21} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Price;
