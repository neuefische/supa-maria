import React from "react";
import Princess from "./Princess";
import "./Characters.css";

async function getCharacter() {
  // Get Characters
  const response = await fetch("http://localhost:4000/characters");
  const results = await response.json();
  console.log(results);
}

getCharacter();

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
