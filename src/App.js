import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Equipment from "./components/Equipment";
import Employees from "./components/Employees";
import Rooms from "./components/Rooms";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Simple</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{textDecoration: "none"}}><Nav.Link>Home</Nav.Link></NavLink>
            <NavLink to="/equipment" style={{textDecoration: "none"}}><Nav.Link>Equipment</Nav.Link></NavLink>
            <NavLink to="/employees" style={{textDecoration: "none"}}><Nav.Link>Employees</Nav.Link></NavLink>
            <NavLink to="/rooms" style={{textDecoration: "none"}}><Nav.Link>Rooms</Nav.Link></NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/equipment"><Equipment /></Route>
        <Route exact path="/employees"><Employees /></Route>
        <Route exact path="/employees/:id"></Route>
        <Route exact path="/rooms"><Rooms /></Route>
        <Route exact path="/rooms/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
