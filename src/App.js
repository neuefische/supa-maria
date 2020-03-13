import React from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import Characters from "./components/Characters";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header className="header"></Header>
      <main>
        <h2>Choose your princesses</h2>
        <Player className="playerOne">Player 1</Player>
        <Player className="playerTwo">Player 2</Player>
        <Characters className="characters"></Characters>
        <Button className="button-disabled">confirm</Button>
      </main>
    </>
  );
}

export default App;
