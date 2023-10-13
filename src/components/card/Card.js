import "./Card.css";
import Like from "../../image/like.svg";
import Liked from "../../image/liked.svg";
import React from "react";

function Card(props) {
  const { image, text, name, time, like, id } = props;
  const [isLike, setIsLike] = React.useState(like);
  const [isClick, setIsClick] = React.useState(true);
  
  const handleClickLike = () => {
    if (isClick) {
      setIsLike(like + 1);
      setIsClick(false);
      return;
    }
    setIsLike(like - 1);
    setIsClick(true);
    return;
  }

  return (
    <li className="photos__item" key={id}>
      <img src={image} alt={text} className="photos__img"/>
      <div className="photos__block">
        <p className="photos__name">{name}<span className="photos__time"> ({time} часов назад)</span></p>
        <p className="photos__text">Вчера он на луну летал, сегодня в руки к нам попал.</p>
        <div className="photos__like-block">
          <p className="photos__like">Нравится: {`${isClick ? like : isLike}`} </p>
          <img src={`${isClick ? Like : Liked}`} onClick={handleClickLike} alt="like" className="photos__liked"/>
        </div>
      </div>
    </li>
  );
}

export default Card;
