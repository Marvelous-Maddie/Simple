import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return(
    <Navbar className="py-3" bg="primary" variant="dark" expand="lg">
      <Navbar.Brand className="mx-5 h1">Simple</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/equipment"><Nav.Link>Equipment</Nav.Link></LinkContainer>
          <LinkContainer to="/employees"><Nav.Link>Employees</Nav.Link></LinkContainer>
          <LinkContainer to="/rooms"><Nav.Link>Rooms</Nav.Link></LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    )
  };

  export default NavBar
