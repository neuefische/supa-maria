import React from "react";
import "./App.css";
import Header from "./components/Header";
import Select from "./pages/SelectPage";
import Result from "./pages/TeamPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Select />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
export default App;
