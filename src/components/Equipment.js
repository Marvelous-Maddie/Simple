import React, { useState, useEffect } from "react";
import AddEquipment from "./AddEquipment";
import DeleteEquipment from "./DeleteEquipment";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Equipment = () => {
  const [equipment, setEquipment] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://salty-refuge-24283.herokuapp.com/equipment");
    res
      .json()
      .then(res => setEquipment(res))
      .catch(alert);
  };

  const postData = async () => {
    const res = await fetch("https://salty-refuge-24283.herokuapp.com/equipment",
      {
        method: "post",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "category": "furnishing",
              "item": "desk",
              "description": "hello",
              "status": "in use",
              "user_id": 657328
        })
      }
    )
    res
      .json()
      .then(res => setEquipment([...equipment, res]))
      .catch(alert);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return(
    <Container className="mx-auto">
      <h2 className="my-5">Equipment</h2>
      <button onClick={postData}>Click</button>
      <AddEquipment />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Item</th>
            <th>Description</th>
            <th>Status</th>
            <th>Latest Updates</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map(i => {
            return(
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.category}</td>
                <td>{i.item}</td>
                <td>{i.description}</td>
                <td>{i.status}</td>
                <td>{i.latest_changes}</td>
                <td><Button variant="primary" className="mr-2"><FontAwesomeIcon icon={faEdit} /></Button><DeleteEquipment {...i}/></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Equipment
