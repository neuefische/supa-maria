import React from "react";
import styled from "@emotion/styled";

import Characters from "../components/Characters";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Headline = styled.header`
  font-family: "Sweet Cake", serif;
  color: white;
  font-size: 3.7rem;
  margin-bottom: 15px;
  margin-top: 30px;
`;

function Select() {
  return (
    <>
      <main>
        <Headline>Choose your princesses</Headline>
        <Characters className="characters"></Characters>
        <Button className="button-disabled">confirm</Button>
        <Link to="/result">TeamPage</Link>
      </main>
    </>
  );
}

export default Select;
