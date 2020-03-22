import React from "react";
import "./App.css";
import Header from "./components/Header";
import Select from "./pages/SelectPage";
import Result from "./pages/TeamPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import bubblegum from "./themes/bubblegum";
import lumpyspace from "./themes/lumpyspace";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [theme, setTheme] = React.useState(bubblegum);
  function switchTheme() {
    setTheme(theme === bubblegum ? lumpyspace : bubblegum);
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header onSwitchChangeClick={switchTheme} />
        <main className="main">
          <Switch>
            <Route path="/game/:gameId">
              <Result />
            </Route>
            <Route path="/">
              <Select />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}
export default App;
