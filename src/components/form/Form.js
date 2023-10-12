import "./Form.css";
import tel from "../../image/phone.svg";
import email from "../../image/mail.svg";
import check from "../../image/check.svg";

function Form(props) {
  return (
    <section className="container">
      <h2 className="form__title">
        Поделитесь своей историей и получите шанс выиграть ценный приз — 1000
        миль на вашу бонусную карту! Пожалуйста, заполните форму ниже:
      </h2>
      <form className="form">
        <div className="form__info-block">
          <div className="form__auth-block">
            <label className="form__label">
              ФАМИЛИЯ:
              <input
                className="form__input"
                placeholder="Укажите фамилию *"
                required
              ></input>
            </label>

            <label className="form__label">
              ИМЯ:
              <input
                className="form__input"
                placeholder="Введите ваше имя *"
                required
              ></input>
            </label>

            <label className="form__label">
              ОТЧЕСТВО:
              <input
                className="form__input"
                placeholder="Ну и отчество тоже"
              ></input>
            </label>
          </div>
          <div>
            <fieldset className="form__fieldset">
              <legend className="form__legend">
                С каким приложением путешествовали?
              </legend>

              <label className="form__radio-label">
                <input className="form__input-radio" type="radio" name="app" />
                <span className="form__radio"></span>
                Pink для iOS
              </label>

              <label className="form__radio-label">
                <input className="form__input-radio" type="radio" name="app" />
                <span className="form__radio"></span>
                Pink на Android
              </label>

              <label className="form__radio-label">
                <input className="form__input-radio" type="radio" name="app" />
                <span className="form__radio"></span>
                Windows Phone
              </label>
            </fieldset>
          </div>
          <fieldset className="form__contact-info container">
            <legend className="form__legend form__contact-legend">
              контактная информация
            </legend>
            <div className="form__block">
              <label className="form__label-adress">
                <input
                  className="form__input-adress"
                  type="text"
                  placeholder="Номер, пожалуйста"
                ></input>
                <span className="form__label-tel">
                  <img src={tel} alt="tel" />
                </span>
                <p className="form__adress-tel">НОМЕР ТЕЛЕФОНА</p>
              </label>
              <label className="form__label-adress">
                <input
                  className="form__input-adress"
                  type="email"
                  placeholder="Введите почту *"
                  required
                ></input>
                <span className="form__label-email">
                  <img src={email} alt="tel" />
                </span>
                <p className="form__adress-tel">АДРЕС ПОЧТЫ</p>
              </label>
            </div>
          </fieldset>
          <fieldset className="form__contact-info container">
            <legend className="form__legend form__checkbox-legend">
              Ваши безбашенные достижения в путешествии
            </legend>
            <div className="form__checkbox-block">
              <label className="form__checkbox-label">
                <input type="checkbox" className="form__input-checkbox"></input>
                <span className="form__checkbox"></span>
                Сделал селфи с акулой
              </label>
              <label className="form__checkbox-label">
                <input type="checkbox" className="form__input-checkbox"></input>
                <span className="form__checkbox"></span>
                Видел Чака Норриса
              </label>
              <label className="form__checkbox-label">
                <input type="checkbox" className="form__input-checkbox"></input>
                <span className="form__checkbox"></span>
                Удержал башню
              </label>
              <label className="form__checkbox-label">
                <input type="checkbox" className="form__input-checkbox"></input>
                <span className="form__checkbox"></span>
                Обгорел на пляже
              </label>
              <label className="form__checkbox-label">
                <input type="checkbox" className="form__input-checkbox"></input>
                <span className="form__checkbox"></span>
                Накупил сувениров
              </label>
              <label className="form__checkbox-label">
                <input type="checkbox" className="form__input-checkbox"></input>
                <span className="form__checkbox"></span>
                Разгромил отель
              </label>
            </div>
          </fieldset>
          <fieldset className="form__area container">
            <legend className="form__legend form__area-legend">
              ОПИШИТЕ СВОИ ЭМОЦИИ
            </legend>
            <div className="form__area-block">
              <textarea
                className="form__text-area"
                placeholder="Можно прям в красках, не стесняясь в выражениях"
              ></textarea>
            </div>
          </fieldset>
        </div>
        <div className="form__footer">
          <button type="button" className="form__button">
            Отправить форму
          </button>
          <p className="form__required"><span className="form__icon">*</span> — обязательные для заполнения поля</p>
        </div>
      </form>
    </section>
  );
}

export default Form;
