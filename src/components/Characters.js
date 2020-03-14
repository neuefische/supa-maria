import React from "react";
import Princess from "./Princess";
import Player from "./Player";
import "./Characters.css";

function Characters(props) {
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [playerClasses, setPlayerClasses] = React.useState([
    "playerOne active",
    "playerTwo"
  ]);
  const [princessesPlayerOne, setPrincessesPlayerOne] = React.useState(Array());
  const [princessesPlayerTwo, setPrincessesPlayerTwo] = React.useState(Array());
  function handleClick(event, princess, princessImage) {
    const nextPlayer = currentPlayer === 1 ? 2 : 1;
    if (currentPlayer === 1) {
      playerClasses[0] = playerClasses[0].replace(" active", "");
      playerClasses[1] = playerClasses[1].concat(" active");
      event.currentTarget.className = "princess-playerOne";
      princessesPlayerOne.push([princess, princessImage]);
      console.log(princessesPlayerOne);
    } else {
      playerClasses[0] = playerClasses[0].concat(" active");
      playerClasses[1] = playerClasses[1].replace(" active", "");
      event.currentTarget.className = "princess-playerTwo";
      princessesPlayerTwo.push([princess, princessImage]);
      console.log(princessesPlayerTwo);
    }
    setPlayerClasses([playerClasses[0], playerClasses[1]]);
    setCurrentPlayer(nextPlayer);
  }

  const princessData = [
    ["Princess Bubblegum", "./assets/bubblegum.png"],
    ["Lumpy Space Princess", "./assets/lumpyspace.png"],
    ["Wild Berry Princess", "./assets/wildberry.png"],
    ["Hot Dog Princess", "./assets/hotdog.png"],
    ["Flame Princess", "./assets/flame.png"],
    ["Bee Princess", "./assets/bee.png"],
    ["Cotton Candy Princess", "./assets/cottoncandy.png"],
    ["Cookie Princess", "./assets/cookie.png"],
    ["Desert Princess", "./assets/desert.png"],
    ["Breakfast Princess", "./assets/breakfast.png"],
    ["Jungle Princess", "./assets/jungle.png"],
    ["Toast Princess", "./assets/toast.png"],
    ["Muscle Princess", "./assets/muscle.png"],
    ["Frozen Yogurt Princess", "./assets/Frozenyogurt.png"],
    ["Slime Princess", "./assets/slime.png"],
    ["Peanut Princess", "./assets/peanut.png"]
  ];
  return (
    <>
      <section className="players">
        <Player className={playerClasses[0]}>Player 1</Player>
        <Player className={playerClasses[1]}>Player 2</Player>
      </section>
      <section className="characters" {...props}>
        <div className="charactersWrapper">
          {princessData.map(function(princess, index) {
            return (
              <Princess
                className="princess"
                imgsource={princess[1]}
                onClick={event => handleClick(event, ...princess)}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Characters;
