import "./Homepage.css";
import Header from "../header/Header";
import Promo from "../promo/Promo";

function Homepage(props) {
  return (
    <>
      <Header />
      <main>
        <Promo />
      </main>
    </>
  );
}

export default Homepage;
