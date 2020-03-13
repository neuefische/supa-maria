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
  const princessData = [
    "./assets/Princess_Bubblegum.png",
    "./assets/Lumpy_Space.png",
    "./assets/Wildberry.png",
    "./assets/Hot_Dog_Princess.png",
    "./assets/Flame_Queen.png",
    "./assets/Bee_Princess.png",
    "./assets/Cotton_Candy_Princess.png",
    "./assets/Princess_Cookie.png",
    "./assets/Desert_Princess.png",
    "./assets/BEPRINCEES.png",
    "./assets/Jungle_Princess.png",
    "./assets/Taoprriecess.png",
    "./assets/Muscle_Princess_Revised.png",
    "./assets/FrozenYogurtPrincess.png",
    "./assets/slime.png",
    "./assets/Peanut_princess.png"
  ];
  return (
    <section className="characters" {...props}>
      <div className="charactersWrapper">
        {princessData.map(function(princess, index) {
          return <Princess className="princess" imgsource={princess} />;
        })}
      </div>
    </section>
  );
}

export default Characters;
