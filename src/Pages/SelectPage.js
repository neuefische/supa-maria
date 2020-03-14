import React from "react";
import "./SelectPage.css";

import Characters from "../components/Characters";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Select() {
  return (
    <>
      <main>
        <h2 className="headline">Choose your princesses</h2>
        <Characters className="characters"></Characters>
        <Button className="button-disabled">confirm</Button>
        <Link to="/result">TeamPage</Link>
      </main>
    </>
  );
}

export default Select;
