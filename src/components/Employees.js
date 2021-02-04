import React, { useState, useEffect, useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import AddEmployee from "./AddEmployee";
import DeleteEmployee from "./DeleteEmployee";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Employees = () => {
  const {employees} = useContext(EmployeesContext);
  
  /*const [employees, setEmployees] = useState([]);

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
  },[]);    */

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
                <td><Button variant="primary" className="mr-2"><FontAwesomeIcon icon={faEdit} /></Button><Button variant="primary"><FontAwesomeIcon icon={faTrash} /></Button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Employees
