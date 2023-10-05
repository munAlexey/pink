import "./Homepage.css";
import Header from "../header/Header";
import Promo from "../promo/Promo";

function Homepage(props) {
  return (
    <div>
      <Header />
      <main>
        <Promo />
      </main>
    </div>
  );
}

export default Homepage;
