import Footer from "../footer/Footer";
import Header from "../header/Header";
import Promo from "../promo/Promo";
import Panorama from "../panorama/Panorama";
import Photos from "../photos/Photos";
import Filters from "../filters/Filters";
import "./Catalog.css";

function Catalog(props) {
  return (
    <div className="page-catalog">
      <Header classCatalog="header__choosen" />
      <main className="main">
        <Promo
          isMain={false}
          title="Фотографии
пользователей"
          class="promo-catalog__title"
        />
        <Panorama />
        <Photos />
        <Filters />
      </main>
      <Footer />
    </div>
  );
}

export default Catalog;
