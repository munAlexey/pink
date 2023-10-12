import "./Comments.css";
import left from "../../image/arrow-left.svg";
import right from "../../image/arrow-right.svg";
import quotes from "../../image/quotes.svg";

function Comments(props) {
  return (
    <section className="comments container">
      <div className="comments__block">
        <button className="comments__btn comments__btn-left" type="button">
          <img src={left} alt="arrow-left" width={22} height={41} />
        </button>
        <button className="comments__btn comments__btn-right" type="button">
          <img src={right} alt="arrow-right" width={22} height={41} />
        </button>
        <img className="comments__quote" src={quotes} alt="quote" width={79} height={63} />
        <div className="comments__text-block">
          <p className="comments__text">
            «Это приложение перевернуло мой мир и позволило по-новому взглянуть
            на привычные серые вещи! А еще я познакомился со своей будущей женой
            в комментариях к выложенной фотографии!»
          </p>
          <h2 className="comments__autor">Николай Петров</h2>
          <p className="comments__info">25 лет, водитель трамвая</p>
        </div>
      </div>
    </section>
  );
}

export default Comments;
