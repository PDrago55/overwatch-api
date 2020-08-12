import React from "react";
import { useEffect } from "react";
import LandingPage from "./LandingPage";
import SingleStats from "./SinglesStats";
import Team from "./Team";
import MapPool from "./MapPool";
import Header from "./Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  // useEffect(() => {
  //   fetch("/api/game/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
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
        <Route exact path="/mappool">
          <MapPool />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
