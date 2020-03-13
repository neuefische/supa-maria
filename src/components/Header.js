import React from "react";
import Crown from "../assets/crown.png";
import "./Header.css";

function Header(props) {
  return (
    <header className="header" {...props}>
      <h1 className="title">Supa</h1>
      <img className="logo" src={Crown} alt="Crown"></img>
      <h1 className="title">Maria</h1>
    </header>
  );
}

export default Header;
