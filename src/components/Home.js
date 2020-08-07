import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Container>
    <Row className="justify-content-md-center">
    <Card className="my-5 mx-3" style={{ width: '20rem' }}>
      <Card.Img variant="top" src="src/assets/technology-2468063_1920.png" />
      <Card.Body>
        <Card.Title>Equipment</Card.Title>
        <Card.Text>
        Manage the equipment of your company: Track the status of every single item and who is using it.
        </Card.Text>
        <NavLink to="/equipment" style={{textDecoration: "none"}}><Button variant="primary">Equipment</Button></NavLink>
      </Card.Body>
    </Card>

    <Card className="my-5 mx-3" style={{ width: '20rem' }}>
      <Card.Img variant="top" src="src/assets/technology-2468063_1920.png" />
      <Card.Body>
        <Card.Title>Employees</Card.Title>
        <Card.Text>
        Manage your employees: Keep track of their position and department as well as the equipment assigned to them.
        </Card.Text>
        <NavLink to="/employees" style={{textDecoration: "none"}}><Button variant="primary">Employees</Button></NavLink>
      </Card.Body>
    </Card>

    <Card className="my-5 mx-3" style={{ width: '20rem' }}>
      <Card.Img variant="top" src="src/assets/technology-2468063_1920.png" />
      <Card.Body>
        <Card.Title>Rooms</Card.Title>
        <Card.Text>
        Manage the rooms of your company: List the rooms and their purposes as well as the employees using the rooms as their offices.
        </Card.Text>
        <NavLink to="/rooms" style={{textDecoration: "none"}}><Button variant="primary">Rooms</Button></NavLink>
      </Card.Body>
    </Card>
    </Row>
    </Container>
  )
};

export default Home;
