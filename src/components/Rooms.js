import React, { useState, useEffect, useContext } from "react";
import { RoomsContext } from "../context/RoomsContext";
import AddRoom from "./AddRoom";
import DeleteRoom from "./DeleteRoom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Rooms = () => {
  const {rooms} = useContext(RoomsContext);
  
  /* const [rooms, setRooms] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://salty-refuge-24283.herokuapp.com/rooms");
    res
      .json()
      .then(res => setRooms(res))
      .catch(alert);
  };

  console.log(rooms);

  useEffect(() => {
    fetchData();
  },[]); */

  return(
    <Container className="mx-auto">
      <h2 className="my-5">Rooms</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Location</th>
            <th>Floor</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(r => {
            return(
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.location_city}<br />{r.location_street} {r.location_num}</td>
                <td>{r.location_floor}</td>
                <td>{r.purpose}</td>
                <td><Button variant="primary" className="mr-2"><FontAwesomeIcon icon={faEdit} /></Button><Button variant="primary"><FontAwesomeIcon icon={faTrash} /></Button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Rooms
