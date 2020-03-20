import React from "react";
import Princess from "./Princess";
import Player from "./Player";
import "./Characters.css";
import { getCharacters } from "../api/game";

function Characters(props) {
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [playerClasses, setPlayerClasses] = React.useState([
    "playerOne active",
    "playerTwo"
  ]);
  const [teamOne, setTeamOne] = React.useState([]);
  const [teamTwo, setTeamTwo] = React.useState([]);

  const [characters, setCharacters] = React.useState([]);

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
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    async function doGetCharacters() {
      try {
        const allCharacters = await getCharacters();
        setCharacters(allCharacters);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    setIsLoading(true);
    doGetCharacters();
    setIsLoading(false);
  }, []);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="players">
        <Player className={playerClasses[0]}>Player 1</Player>
        <Player className={playerClasses[1]}>Player 2</Player>
      </section>
      <section className="characters" {...props}>
        <div className="charactersWrapper">
          {characters.map(character => {
            return (
              <Princess
                key={character.id}
                imgSource={character.img}
                className="princess"
                onClick={event =>
                  handleClick(
                    event,
                    character.id,
                    character.name,
                    character.img
                  )
                }
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Characters;
