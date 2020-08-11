import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const Equipment = () => {
  const [equipment, setEquipment] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://salty-refuge-24283.herokuapp.com/equipment");
    res
      .json()
      .then(res => setEquipment(res))
      .catch(alert);
  };

  console.log(equipment);

  useEffect(() => {
    fetchData();
  },[]);

  return(
    <Container className="mx-auto">
      <h2 className="my-5">Equipment</h2>
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
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Equipment
