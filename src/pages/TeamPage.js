import React, { useEffect } from "react";
import Princess from "../components/Princess";
import Player from "../components/Player";
import Button from "../components/Button";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Result() {
  const [teamOne, setTeamOne] = React.useState([]);
  const [teamTwo, setTeamTwo] = React.useState([]);

  useEffect(() => {
    async function getTeamOne() {
      const response = await fetch("http://localhost:4000/teams/1");
      const results = await response.json();
      const princessIDs = Object.keys(results.teamone);
      const teamOne = princessIDs.map(id => {
        return [id, results.teamone[id].name, results.teamone[id].img];
      });
      setTeamOne(teamOne);
    }

    async function getTeamTwo() {
      const response = await fetch("http://localhost:4000/teams/1");
      const results = await response.json();
      const princessIDs = Object.keys(results.teamtwo);
      const teamTwo = princessIDs.map(id => {
        return [id, results.teamtwo[id].name, results.teamtwo[id].img];
      });
      setTeamTwo(teamTwo);
    }
    getTeamOne();
    getTeamTwo();
  }, []);

  const TeamOne = styled.teamOne`
    display: flex;
  `;

  const TeamTwo = styled.teamTwo`
    display: flex;
  `;

  return (
    <main>
      <Player className="playerOne">Player 1</Player>
      <TeamOne>
        {teamOne.map(function(princess) {
          return (
            <Princess
              className="princess-playerOne princess-results"
              imgsource={princess[2]}
            />
          );
        })}
      </TeamOne>
      <Player className="playerTwo">Player 2</Player>
      <TeamTwo>
        {teamTwo.map(function(princess) {
          return (
            <Princess
              className="princess-playerTwo princess-results"
              imgsource={princess[2]}
            />
          );
        })}
      </TeamTwo>
      <Button className="">Start Game</Button>
      <Link to="/select">SelectPage</Link>
    </main>
  );
}
export default Result;
