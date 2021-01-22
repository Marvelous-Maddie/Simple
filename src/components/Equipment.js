import React, { useContext } from "react";
import { EquipmentContext } from "../context/EquipmentContext";
import AddEquipment from "./AddEquipment";
import DeleteEquipment from "./DeleteEquipment";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Equipment = () => {
  const {equipment} = useContext(EquipmentContext);

  return(
    <Container className="mx-auto">
      <h2 className="my-5">Equipment</h2>
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
                <td><Button variant="primary" className="mr-2"><FontAwesomeIcon icon={faEdit} /></Button><DeleteEquipment id={i.id}/></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Equipment
