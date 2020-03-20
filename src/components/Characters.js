import React from "react";
import Princess from "./Princess";
import { PlayerOne, PlayerTwo } from "./Player";

import styled from "@emotion/styled";

function Characters(props) {
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [playerClasses, setPlayerClasses] = React.useState([
    "PlayerOne active",
    "PlayerTwo"
  ]);
  const [teamOne, setTeamOne] = React.useState([]);
  const [teamTwo, setTeamTwo] = React.useState([]);

  async function handleClick(event, princessID, princessName, princessImage) {
    // Stop functionality if already 8 princesses are selected
    if (teamOne.length === 4 && teamTwo.length === 4) {
      return;
    }

    // Stop if princess is already in a team
    const allTeams = teamOne.concat(teamTwo);

    const alreadySelected = allTeams.find(
      selectedPrincess => selectedPrincess[1] === princessName
    )
      ? true
      : false;

    if (alreadySelected) {
      return;
    }

    // Set next player
    const nextPlayer = currentPlayer === 1 ? 2 : 1;

    if (currentPlayer === 1) {
      // Toggle active player class
      playerClasses[0] = playerClasses[0].replace(" active", "");
      playerClasses[1] = playerClasses[1].concat(" active");

      // Save selected princess in array
      event.currentTarget.className = "princess-playerOne";
      teamOne.push([princessID, princessName, princessImage]);
      setTeamOne(teamOne);
    } else {
      // Toggle active player class
      playerClasses[0] = playerClasses[0].concat(" active");
      playerClasses[1] = playerClasses[1].replace(" active", "");

      // Save selected princess in array
      event.currentTarget.className = "princess-playerTwo";
      teamTwo.push([princessID, princessName, princessImage]);
      setTeamTwo(teamTwo);
    }

    // Create teams object to save it in db
    const teams = {};
    teams.teamone = {};
    teams.teamtwo = {};

    // Create team one object
    teamOne.forEach(princess => {
      teams.teamone[princess[0]] = {
        name: princess[1],
        img: princess[2]
      };
    });

    // Create team two object
    teamTwo.forEach(princess => {
      teams.teamtwo[princess[0]] = {
        name: princess[1],
        img: princess[2]
      };
    });

    console.log(teams);

    //Save / update teams in db
    await fetch("http://localhost:4000/teams/1", {
      method: "DELETE"
    });
    await fetch("http://localhost:4000/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(teams)
    });

    setPlayerClasses([playerClasses[0], playerClasses[1]]);
    setCurrentPlayer(nextPlayer);
  }

  const princessData = [
    ["01", "Princess Bubblegum", "./assets/bubblegum.png"],
    ["02", "Lumpy Space Princess", "./assets/lumpyspace.png"],
    ["03", "Wild Berry Princess", "./assets/wildberry.png"],
    ["04", "Hot Dog Princess", "./assets/hotdog.png"],
    ["05", "Flame Princess", "./assets/flame.png"],
    ["06", "Bee Princess", "./assets/bee.png"],
    ["07", "Cotton Candy Princess", "./assets/cottoncandy.png"],
    ["08", "Cookie Princess", "./assets/cookie.png"],
    ["09", "Desert Princess", "./assets/desert.png"],
    ["10", "Breakfast Princess", "./assets/breakfast.png"],
    ["11", "Jungle Princess", "./assets/jungle.png"],
    ["12", "Toast Princess", "./assets/toast.png"],
    ["13", "Muscle Princess", "./assets/muscle.png"],
    ["14", "Frozen Yogurt Princess", "./assets/frozenyogurt.png"],
    ["15", "Slime Princess", "./assets/slime.png"],
    ["16", "Peanut Princess", "./assets/peanut.png"]
  ];

  const Players = styled.section`
      display: flex;
      flex-direction: row;
    }
  `;

  const CharactersWrapper = styled.div`
    background-color: #ffc4eb;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    max-width: 600px;
    max-height: 600px;
  `;

  const CharactersCSS = styled.section`
    border-radius: 10px;
    margin: 10px;
    width: 100%;
    max-width: 600px;
    max-height: 600px;
  `;

  return (
    <>
      <Players>
        {/* <Player className={playerClasses[0]}>Player 1</Player>
        <Player className={playerClasses[1]}>Player 2</Player> */}
        <PlayerOne>Player 1</PlayerOne>
        <PlayerTwo>Player 2</PlayerTwo>
      </Players>
      <CharactersCSS {...props}>
        <CharactersWrapper>
          {princessData.map(function(princess, index) {
            return (
              <Princess
                className="princess"
                imgsource={princess[2]}
                onClick={event => handleClick(event, ...princess)}
              />
            );
          })}
        </CharactersWrapper>
      </CharactersCSS>
    </>
  );
}

export default Characters;
