import "./Info.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import dot from "../../image/dot.svg";

function Info(props) {
  return (
    <section className="info">
      <h2 className="info__head-title">Остались вопросы? Свяжитесь с нами!</h2>
      <div className="info__list">
        <div className="info__block">
          <div className="info__tel">
            <p className="info__title">Звоните:</p>
            <a href="tel:+78125556666" className="info__text">
              +7 (812) 555-66-66
            </a>
          </div>
          <div className="info__mail">
            <p className="info__title">Пишите:</p>
            <a href="mailto:mail@htmlacademy.ru" className="info__text">
              mail@htmlacademy.ru
            </a>
          </div>
        </div>
        <div className="info__adress">
          <p className="info__title">Приезжайте в гости:</p>
          <p className="info__text">ул. Большая Конюшенная, 19/8</p>
        </div>
      </div>
      <div className="info__map">
      <YMaps>
        <div className="info__map-block">
          <Map
            className="info__map-info"
            defaultState={{ center: [59.938631, 30.323037], zoom: 16 }}
          >
            <Placemark geometry={[59.938631, 30.323037]} options={{
                   iconLayout: 'default#image',
                   iconImageHref: `${dot}`,
                   iconImageSize: [36, 36],
                 }} />
          </Map>
        </div>
      </YMaps>
    </div>
    </section>
  );
}

export default Info;
