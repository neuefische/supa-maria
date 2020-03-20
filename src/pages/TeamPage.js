import React, { useEffect } from "react";
import Princess from "../components/Princess";
import Player from "../components/Player";
import Button from "../components/Button";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Result() {
  const [teams, setTeams] = React.useState([]);

  useEffect(() => {
    async function getTeams() {
      const response = await fetch("http://localhost:4000/teams/");
      const results = await response.json();
      setTeams(results);
    }
    getTeams();
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
      <Link to="/select">SelectPage</Link>
    </main>
  );
}
export default Result;
