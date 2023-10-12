import "./Formpage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Promo from "../promo/Promo";
import Form from "../form/Form";

function Formpage(props) {
  return (
    <div className="page-catalog">
      <Header classForm="header__choosen" />
      <main className="main">
        <Promo
          isMain={false}
          title="Конкурс на самое безбашенное путешествие с Пинк"
          class="promo-form__title"
        />
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default Formpage;