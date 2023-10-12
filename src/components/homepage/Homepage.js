import "./Homepage.css";
import Header from "../header/Header";
import Promo from "../promo/Promo";
import Offer from "../offer/Offer";
import Comments from "../comments/Comments";
import Price from "../price/Price";
import Info from "../info/Info";
import Footer from "../footer/Footer";

function Homepage(props) {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Promo isMain={true} />
        <Offer />
        <Comments />
        <Price />
        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
