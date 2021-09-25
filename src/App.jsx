import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Company from "./pages/Company/Company";
import Overview from "./pages/Overview/Overview";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <Overview />
          </Route>

          <Route path="/company">
            <Company />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
