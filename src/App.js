import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from "react-router-dom";

import LeagueDetails from "./Components/LeagueDetails";
import LeagueListContainer from "./Containers/LeagueListContainer";

// TODO - create simple league entry form component

// TODO - test out league creation and display

function App() {
  return (
    <div>
      <Switch>
        <Route path="/leagues/:id">
          <LeagueDetails />
        </Route>
        <Route path="/leagues">
          <LeagueListContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
