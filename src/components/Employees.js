import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://salty-refuge-24283.herokuapp.com/employees");
    res
      .json()
      .then(res => setEmployees(res))
      .catch(alert);
  };

  console.log(employees);

  useEffect(() => {
    fetchData();
  },[]);

  return(
    <Container className="mx-auto">
      <h2 className="my-5">Employees</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(e => {
            return(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.last_name}</td>
                <td>{e.first_name}</td>
                <td>{e.department}</td>
                <td>{e.position}</td>
                <td>{e.room_id}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Employees
