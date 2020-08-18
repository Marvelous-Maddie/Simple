import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddEquipment = () => {
  const [show, setShow] = useState(false);
  const [equipment, addEquipment] = useState({category: "", item: "", description: "", status:"", user_id:""});

  const handleChange = (e) => {
    e.persist()
    addEquipment(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {category, item, description, status} = equipment;

    if(!category || !item || !description || !status) {
      alert("Please fill in all fields!")
    } else {
      try {
        const res = await fetch("https://salty-refuge-24283.herokuapp.com/equipment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...equipment})
        });
        const data = await res.json();
        console.log(data)
      }
      catch (err) {
        console.log(err)
      }
    }
  }
  //clear input fields

  return (
    <Container>
      <Alert show={show} variant="light">
        <Alert.Heading>Add to equipment</Alert.Heading>
        <Form onChange={handleChange}>
          <Row>
            <Col xs={5}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control name="category" as="select">
                  <option>Please select</option>
                  <option>furnishing</option>
                  <option>stationary</option>
                  <option>IT</option>
                  <option>other</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col xs={5}>
              <Form.Group controlId="item">
                <Form.Label>Item</Form.Label>
                <Form.Control name="item" type="text" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control name="status" as="select">
                  <option>Please select</option>
                  <option>in use</option>
                  <option>not in use</option>
                  <option>defect</option>
                  <option>under repair</option>
                  <option>lost</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" type="text" />
          </Form.Group>

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

      {!show && <div className="d-flex justify-content-end my-2"><Button onClick={() => setShow(true)} variant="primary">Add to equipment</Button></div>}
    </Container>
  );
};

export default AddEquipment
