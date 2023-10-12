import "./Panorama.css";
import panorama from "../../image/panorama.jpg";

function Panorama(props) {
  return (
    <section className="panorama">
      <h2 className="panorama__title container">
        Взгляните на фотографии, которые выкладывают пользователи! Видите, как
        не хватает ваших?
      </h2>
      <div className="panorama__block">
        <p className="panorama__hit">ПАНОРАМА ДНЯ</p>
        <img src={panorama} alt="panorama" className="panorama__img" />
        <div className="panorama__text-block">
          <div className="panorama__info-block">
            <p className="panorama__name">Анна<span className="panorama__time">(5 минут назад)</span></p>
            <p className="panorama__like">Нравится: 215</p>
          </div>
          <p className="panorama__text">Прыгать или нет? Напишите в комментарии свой совет и смотрите прямую трансляцию в перископе, задавайте свои вопросы!</p>
        </div>
      </div>
    </section>
  );
}

export default Panorama;
