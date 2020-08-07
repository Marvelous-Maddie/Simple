import React from 'react';
import { NavLink, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/equipment">Equipment</NavLink>
      <NavLink to="/employees">Employees</NavLink>
      <NavLink to="/rooms">Rooms</NavLink>

      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/equipment"></Route>
        <Route exact path="/employees"></Route>
        <Route exact path="/employees/:id"></Route>
        <Route exact path="/rooms"></Route>
        <Route exact path="/rooms/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
