import "./Card.css";
import liked from "../../image/like.svg";

function Card(props) {
  const { image, text, name, time, like, id } = props;
  return (
    <li className="photos__item" key={id}>
      <img src={image} alt={text} className="photos__img"/>
      <div className="photos__block">
        <p className="photos__name">{name}<span className="photos__time"> ({time} часов назад)</span></p>
        <p className="photos__text">Вчера он на луну летал, сегодня в руки к нам попал.</p>
        <div className="photos__like-block">
          <p className="photos__like">Нравится: {like}</p>
          <img src={liked} alt="like" className="photos__liked"/>
        </div>
      </div>
    </li>
  );
}

export default Card;
