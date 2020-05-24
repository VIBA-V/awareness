import React from "react";
import Home from "./components/Home";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quizz from "./components/layout/Quizz";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/awareness/Quizz">
            <Quizz />
          </Route>
          <Route exact path="/awareness">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
const rootElement = document.getElementById("root");
render(<App />, rootElement);
export default App;
