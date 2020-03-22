import React, { useEffect } from "react";
import Princess from "../components/Princess";
import Player from "../components/Player";
import Button from "../components/Button";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

function Result() {
  const [teams, setTeams] = React.useState([]);
  const { gameId } = useParams();
  useEffect(() => {
    async function getTeams(gameId) {
      const response = await fetch(`http://localhost:4000/games/${gameId}`);
      const game = await response.json();
      setTeams(game.teams);
    }
    getTeams(gameId);
  }, []);

  // set teamOne and teamTwo
  const TeamOne = styled.div`
    display: flex;
  `;

  const TeamTwo = styled.div`
    display: flex;
  `;

  return (
    <main>
      <Player player={1}>Player 1</Player>
      <TeamOne>
        {teams
          .filter(princess => princess.team === 1)
          .map(function(princess) {
            return (
              <Princess
                key={princess.id}
                className="princess-playerOne princess-results"
                team={princess.team}
                imgSource={princess.img}
                shownOnTeamPage={true}
              />
            );
          })}
      </TeamOne>
      <Player player={2}>Player 2</Player>
      <TeamTwo>
        {teams
          .filter(princess => princess.team === 2)
          .map(function(princess) {
            return (
              <Princess
                key={princess.id}
                className="princess-playerTwo princess-results"
                team={princess.team}
                imgSource={princess.img}
                shownOnTeamPage={true}
              />
            );
          })}
      </TeamTwo>
      <Button className="">Start Game</Button>
    </main>
  );
}
export default Result;
