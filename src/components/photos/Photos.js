import "./Photos.css";
import Card from "../card/Card";
import Data from "../../utils/constants";

function Photos(props) {
  const data = Data;

  return (
    <section className="photos container">
      <ul className="photos__list">
        {data.map((card) => {
          return <Card
            key={card.id}
            name={card.name}
            image={card.image}
            text={card.text}
            time={card.time}
            like={card.like}
          />;
        })}
      </ul>
    </section>
  );
}

export default Photos;
