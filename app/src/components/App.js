import React from "react";
import Home from "./Home";
import Questions from "./Questions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";

function App() {
  return <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/questions" component={Questions}></Route>
    </Switch>
  </Router>;
}

export default App;
