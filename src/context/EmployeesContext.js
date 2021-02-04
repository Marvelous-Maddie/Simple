import React, { createContext, useState, useEffect } from "react";

export const EmployeesContext = createContext();

const EmployeesContextProvider = ({children}) => {
  const [employees, setEmployees] = useState([]);
  
//Read
  useEffect(() => {
    try {
      const res = fetch("https://salty-refuge-24283.herokuapp.com/employees")
      .then(res => res.json())
      .then(res => setEmployees(res))
      .then(console.log(employees))
    }
    catch (err) {
      console.log(err)
    }
  },[]);

//Create
  const create = (e, value) => {
    e.preventDefault();
    const {lastName, firstName, department, position, roomId} = value;

    if(!lastName || !firstName || !department || !position) {
      alert("Please fill in all fields!")
    } else {
      try {
        const res = fetch("https://salty-refuge-24283.herokuapp.com/employees", {
        /*const res = fetch("http://localhost:4000/employees", {*/
          method: "POST",
          headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({lastName, firstName, department, position, roomId})
        })
        .then (res => res.json())
        .then(res => setEmployees([...employees, res]))
      }
      catch (err) {
        console.log(err)
      }
    }
  };

//Update
//tbd

//Delete
const discard = id => {
    try {
      fetch(`https://salty-refuge-24283.herokuapp.com/employees/${id}`, {
      method:"DELETE"
      })
      .then(() => setEmployees(employees.filter(i => i.id !== id)))
      .then(alert(`Successfully deleted`))
    }
    catch (err) {
      console.error("Error", err)
      alert("Failed to delete")
    };
  };

  return (
      <EmployeesContext.Provider value= {{employees, setEmployees, create, discard}}>
        {children}
      </EmployeesContext.Provider>
  )
};

export default EmployeesContextProvider
