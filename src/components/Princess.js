import React from "react";
import styled from "@emotion/styled";

const backgroundDefault = "rgb(255, 255, 255, 0.7)";
const backgroundPlayerOne = "#591f6e";
const backgroundPlayerTwo = "#d10171";

const PrincessImageWrapper = styled.div`
  flex-basis: calc(100% / 4 - 4px);
  background-color: ${backgroundDefault};
  ${props => (props.team === 1 ? `background: ${backgroundPlayerOne};` : "")}
  ${props =>
    props.team === 2 ? `background: ${backgroundPlayerTwo};` : ""}
  margin: 2px;
  ${props =>
    props.shownOnTeamPage
      ? "border: 10px solid #ff20ac;border-radius: 10px;margin: 4px;"
      : "cursor: pointer;&:hover {outline: solid 4px #ffd800;}"}
`;

const PrincessImage = styled.img`
  width: 141px;
  height: 141px;
`;

function Princess({ imgSource, onPrincessClick, team, shownOnTeamPage }) {
  return (
    <PrincessImageWrapper
      team={team}
      onClick={onPrincessClick}
      shownOnTeamPage={shownOnTeamPage}
    >
      <PrincessImage src={imgSource} alt="princess" />
    </PrincessImageWrapper>
  );
}

export default Princess;
