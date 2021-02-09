import React, { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddEmployee = () => {
  const {create} = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const [employee, addEmployee] = useState({id: 0, lastName: "", firstName: "", department: "", position:"", roomId: ""});

  const handleChange = (e) => {
    e.persist()
    addEmployee(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  };

  const handleSubmit = (e) => {
    create(e, employee)
  };

  return (
    <Container>
      <Alert show={show} variant="light">
        <Alert.Heading>Add to employees</Alert.Heading>
        <Form onChange={handleChange}>
          <Row>
                <Col xs={2}>
                <Form.Group controlId="id">
                    <Form.Label>ID</Form.Label>
                    <Form.Control name="id" type="text" />
                </Form.Group>
                </Col>

                <Col xs={5}>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" type="text" />
                </Form.Group>
                </Col>

                <Col xs={5}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" type="text" />
                </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <Form.Group controlId="department">
                        <Form.Label>Department</Form.Label>
                        <Form.Control name="department" as="select">
                        <option>Please select</option>
                        <option>Executive Board</option>
                        <option>Sales</option>
                        <option>Purchasing</option>
                        <option>HR</option>
                        <option>IT</option>
                        <option>Software Development</option>
                        <option>Others</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            
                <Col xs={5}>
                    <Form.Group controlId="position">
                        <Form.Label>Position</Form.Label>
                        <Form.Control name="position" type="text" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="roomId">
                        <Form.Label>Room</Form.Label>
                        <Form.Control name="roomId" type="text" />
                    </Form.Group>
                </Col>
            </Row>

          <hr />

          <div className="d-flex justify-content-end">
            <Button className="mx-2" onClick={() => setShow(false)} variant="primary">
              Close
            </Button>

            <Button onClick={handleSubmit} variant="primary">
              Add
            </Button>
          </div>
        </Form>
      </Alert>

      {!show && <div className="d-flex justify-content-end my-2"><Button onClick={() => setShow(true)} variant="primary">Add to employees</Button></div>}
    </Container>
  );
};

export default AddEmployee