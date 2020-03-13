import React from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import Characters from "./components/Characters";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Choose your princesses</h2>
        <section className="players">
          <Player className="playerOne">Player 1</Player>
          <Player className="playerTwo">Player 2</Player>
        </section>
        <Characters className="characters"></Characters>
        <Button className="button-save">confirm</Button>
      </main>
    </>
  );
}

export default App;
