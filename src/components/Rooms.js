import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

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
  },[]);

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
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Rooms
