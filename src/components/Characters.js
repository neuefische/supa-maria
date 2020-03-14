import React from "react";
import Princess from "./Princess";
import Player from "./Player";
import "./Characters.css";

// async function getCharacter() {
//   // Get Characters
//   const response = await fetch("http://localhost:4000/characters");
//   const results = await response.json();
//   console.log(results);
// }

// getCharacter();

function Characters(props) {
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [playerClass, switchPlayerClasses] = React.useState([
    "playerOne active",
    "playerTwo"
  ]);
  function handleClick() {
    const nextPlayer = currentPlayer === 1 ? 2 : 1;
    if (currentPlayer === 1) {
      playerClass[0] = playerClass[0].replace(" active", "");
      playerClass[1] = playerClass[1].concat(" active");
    } else {
      playerClass[0] = playerClass[0].concat(" active");
      playerClass[1] = playerClass[1].replace(" active", "");
    }
    switchPlayerClasses([playerClass[0], playerClass[1]]);
    setCurrentPlayer(nextPlayer);
    console.log(nextPlayer);
  }

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
    <>
      <section className="players">
        <Player className={playerClass[0]}>Player 1</Player>
        <Player className={playerClass[1]}>Player 2</Player>
      </section>
      <section className="characters" {...props}>
        <div className="charactersWrapper">
          {princessData.map(function(princess, index) {
            return (
              <Princess
                className="princess"
                imgsource={princess}
                onClick={() => handleClick()}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Characters;
