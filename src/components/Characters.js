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
    "./assets/bubblegum.png",
    "./assets/lumpyspace.png",
    "./assets/wildberry.png",
    "./assets/hotdog.png",
    "./assets/flame.png",
    "./assets/bee.png",
    "./assets/cottoncandy.png",
    "./assets/cookie.png",
    "./assets/desert.png",
    "./assets/breakfast.png",
    "./assets/jungle.png",
    "./assets/toast.png",
    "./assets/muscle.png",
    "./assets/Frozenyogurt.png",
    "./assets/slime.png",
    "./assets/peanut.png"
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
