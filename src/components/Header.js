import React from "react";
import { crown } from "../assets/crown.png";
import "./Header.css";

function Header(props) {
  return (
    <>
      <header className="header" {...props} />
      <h1 className="title">Supa</h1>
      <img className="logo" src={crown} alt="Crown"></img>
      <h1 className="title">Maria</h1>
    </>
  );
}

export default Header;
