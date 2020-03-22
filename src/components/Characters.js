import React from "react";
import Princess from "./Princess";
import Player from "./Player";
import styled from "@emotion/styled";
import { getCharacters } from "../api/game";
import ConfirmButton from "../components/Button";
import { useHistory } from "react-router-dom";

function Characters(props) {
  const history = useHistory();

  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [teams, setTeams] = React.useState([]);
  const [characters, setCharacters] = React.useState([]);
  const [teamsAreFull, setTeamsAreFull] = React.useState(false);

  async function handleClick(character) {
    // Stop functionality if already 8 princesses are selected
    if (teamsAreFull) {
      return;
    }
    // Stop if princess is already in a team
    const alreadySelected = teams.find(
      selectedPrincess => selectedPrincess.id === character.id
    )
      ? true
      : false;
    if (alreadySelected) {
      return;
    }
    // Set next player
    const nextPlayer = currentPlayer === 1 ? 2 : 1;
    // Save selected princess in object
    const newPrincess = {
      name: character.name,
      id: character.id,
      img: character.img,
      team: currentPlayer
    };
    teams.push(newPrincess);
    setTeams(teams);
    // Save selected princess in characters
    const characterIds = characters.map(character => {
      return character.id;
    });
    const newPrincessIndex = Number(characterIds.indexOf(character.id));
    characters[newPrincessIndex] = newPrincess;
    setCharacters(characters);
    setCurrentPlayer(nextPlayer);
    setTeamsAreFull(teams.length === 8);
  }

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
  `;

  const CharactersCSS = styled.section`
    border-radius: 10px;
    margin: 10px;
    width: 100%;
    max-width: 600px;
    max-height: 600px;
  `;

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

  // Save / update teams in db
  async function postTeam(teams) {
    const response = await fetch("http://localhost:4000/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(teams)
    });
    const createdTeam = await response.json();
    return createdTeam;
  }

  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Players>
        <Player player={1} currentPlayer={currentPlayer}>
          Player 1
        </Player>
        <Player player={2} currentPlayer={currentPlayer}>
          Player 2
        </Player>
      </Players>
      <CharactersCSS>
        <CharactersWrapper>
          {characters.map(character => (
            <Princess
              key={character.id}
              imgSource={character.img}
              team={character.team}
              onPrincessClick={() => handleClick(character)}
            ></Princess>
          ))}
        </CharactersWrapper>
      </CharactersCSS>
      <section>
        <ConfirmButton
          disabled={!teamsAreFull}
          onClick={() => {
            history.push("/result");
          }}
        >
          confirm
        </ConfirmButton>
      </section>
    </>
  );
}

export default Characters;
