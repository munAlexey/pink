import "./Panorama.css";
import panorama from "../../image/panorama.jpg";
import Like from "../../image/like.svg";
import Liked from "../../image/liked.svg";
import React from "react";

function Panorama(props) {
  const [isLike, setIsLike] = React.useState(215);
  const [isClick, setIsClick] = React.useState(true);
  
  const handleClickLike = () => {
    if (isClick) {
      setIsLike(isLike + 1);
      setIsClick(false);
      return;
    }
    setIsLike(isLike - 1);
    setIsClick(true);
    return;
  }
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
            <p className="panorama__like">Нравится: {`${isClick ? isLike : isLike}`}<span><img src={`${isClick ? Like : Liked}`} onClick={handleClickLike} alt="like"/></span></p>
          </div>
          <p className="panorama__text">Прыгать или нет? Напишите в комментарии свой совет и смотрите прямую трансляцию в перископе, задавайте свои вопросы!</p>
        </div>
      </div>
    </section>
  );
}

export default Panorama;
