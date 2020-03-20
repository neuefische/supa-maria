import React from "react";
import "./SelectPage.css";

import Characters from "../components/Characters";
import { Link } from "react-router-dom";

function Select() {
  return (
    <>
      <main>
        <h2 className="headline">Choose your princesses</h2>
        <Characters className="characters"></Characters>
        <Link to="/result">TeamPage</Link>
      </main>
    </>
  );
}

export default Select;
