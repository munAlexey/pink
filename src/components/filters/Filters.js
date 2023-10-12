import "./Filters.css";
import img from "../../image/photo-7-desktop.jpg";
import Crop from "../../image/crop.svg";
import Fill from "../../image/fill.svg";
import Contrast from "../../image/contrast.svg";
import React from "react";

function Filters(props) {
  const [crop, setCrop] = React.useState(100);
  const [fill, setFill] = React.useState(100);
  const [contrast, setContrast] = React.useState(100);

  const handleChangeContrast = (event) => {
    setContrast(event.target.value);
  };

  const handleChangeCrop = (event) => {
    setCrop(event.target.value);
  };

  const handleChangeFill = (event) => {
    setFill(event.target.value);
  };

  return (
    <section className="filters container">
      <h2 className="filters__title">
        Затмите их всех! Выкладывайте все, что накопилось в телефоне!
      </h2>
      <div className="filters__block">
        <div className="filters__img-block">
          <img
            src={img}
            alt="winter"
            width={300}
            height={400}
            className="filters__img"
            style={{
              filter: `contrast(${contrast}%)`,
              width: `${crop}%`,
              opacity: `${fill/100}`
            }}
          />
        </div>
        <div className="filters__change">
          <label className="filters__label">
            <img src={Crop} alt="crop" />
            <input
              type="range"
              onChange={handleChangeCrop}
              value={crop}
              min={1}
              max={100}
              className="filters__input"
            />
          </label>
          <label className="filters__label">
            <img
              src={Fill}
              alt="fill"
            />
            <input type="range" onChange={handleChangeFill}
              value={fill}
              min={0}
              max={100}
              className="filters__input"/>
          </label>
          <label className="filters__label filters__label-contrast">
            <img src={Contrast} alt="contrast" />
            <input
              type="range"
              onChange={handleChangeContrast}
              value={contrast}
              min={1}
              max={100}
              className="filters__input"
            />
          </label>
          <div className="filters__buttons">
            <button className="filters__button">Запостить</button>
            <button className="filters__button filters__button__disabled" disabled>Отмена</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filters;
