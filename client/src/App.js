import React from "react";
import { useEffect } from "react";
import LandingPage from "./LandingPage";
import SingleStats from "./SinglesStats";
import Team from "./Team";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  useEffect(() => {
    fetch("/api/game/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/mystats">
          <SingleStats />
        </Route>
        <Route exact path="/myteam">
          <Team />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
