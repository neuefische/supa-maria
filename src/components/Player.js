import styled from "@emotion/styled";

const backgroundPlayerOne = "radial-gradient(circle, #b13edb 0%, #591f6e 100%)";
const backgroundPlayerTwo = "radial-gradient(circle, #ff7eeb 0%, #d10171 100%)";

const Player = styled.div`
  background: ${props =>
    props.player === 1 ? backgroundPlayerOne : backgroundPlayerTwo};
  ${props => (props.player === props.currentPlayer ? "background: red;" : "")};
  margin: 10px;
  padding: 10px 10px;
  /* width: 100%; */
  max-width: 350px;
  height: 60px;
  border-radius: 25px;
  font-family: "Sweet Cake", serif;
  font-size: 2.5rem;
  color: white;
`;

export default Player;
