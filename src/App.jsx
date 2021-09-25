import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Company from "./pages/Company/Company";
import Overview from "./pages/overview/overview";

function App() {
  return (
    <div className="App">
      <Router>
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
