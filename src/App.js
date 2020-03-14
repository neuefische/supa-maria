import React from "react";
import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2 className="headline">Choose your princesses</h2>
        <Characters className="characters"></Characters>
        <Button className="button-disabled">confirm</Button>
      </main>
    </>
  );
}

export default App;
