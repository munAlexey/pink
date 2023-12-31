import "./App.css";
import "../container/container.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Catalog from "../catalog/Catalog";
import Formpage from "../formpage/Formpage";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="pages">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/form" element={<Formpage />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
