import React from "react";
import { Switch, Route } from "react-router-dom";
import EquipmentContextProvider from "./context/EquipmentContext";
import EmployeeContextProvider from "./context/EmployeeContext";
import RoomContextProvider from "./context/RoomContext";
import Home from "./components/Home";
import Equipment from "./components/Equipment";
import Employees from "./components/Employees";
import Rooms from "./components/Rooms";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/equipment"><EquipmentContextProvider><Equipment /></EquipmentContextProvider></Route>
        <Route exact path="/employees"><EmployeeContextProvider><Employees /></EmployeeContextProvider></Route>
        <Route exact path="/employees/:id"></Route>
        <Route exact path="/rooms"><RoomContextProvider><Rooms /></RoomContextProvider></Route>
        <Route exact path="/rooms/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
