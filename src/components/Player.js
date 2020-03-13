import React from "react";
import "./Player.css";

function Player(props) {
  return <div className="player" {...props} />;
}

export default Player;

// const [xIsNext, setXIsNext] = React.useState(Math.random() > 0.5);

// const nextPlayer = xIsNext ? "Play" : "🍉";
// const winner = calculateWinner(squares);
// const status = winner ? `Winner is ${winner}` : `Next player: ${nextPlayer}`;

// function handleClick(squareIndex) {
//   if (squares[squareIndex] !== null || winner) {
//     return;
//   }
