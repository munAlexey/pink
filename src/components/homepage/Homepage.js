import "./Homepage.css";
import Header from "../header/Header";
import Promo from "../promo/Promo";
import Offer from "../offer/Offer";

function Homepage(props) {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <Offer />
      </main>
    </>
  );
}

export default Homepage;
