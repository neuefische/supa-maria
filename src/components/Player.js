import React from "react";
import styled from "@emotion/styled";

export const PlayerOne = styled.div`
  background: rgb(234, 234, 234);
  background: radial-gradient(circle, #b13edb 0%, #591f6e 100%);
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

export const PlayerOneActive = styled(PlayerOne)`
  background: yellow;
`;

export const PlayerTwo = styled.div`
  background: rgb(234, 234, 234);
  background: radial-gradient(circle, #ff7eeb 0%, #d10171 100%);
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

export const PlayerTwoActive = styled(PlayerTwo)`
  background: yellow;
`;

// export function Player(props) {
//   return <div className="player" {...props} />;
// }
