import React from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import Characters from "./components/Characters";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <Header className="header"></Header>
      <Player className="playerOne"></Player>
      <Player className="playerTwo"></Player>
      <Characters className="characters"></Characters>
      <Button className="button-save"></Button>
    </main>
  );
}

export default App;
