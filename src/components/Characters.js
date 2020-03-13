import React from "react";
import Princess from "./Princess";
import "./Characters.css";

function Characters(props) {
  return (
    <section className="characters" {...props}>
      <div className="charactersWrapper">
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
        <Princess className="princess" />
      </div>
    </section>
  );
}

export default Characters;
