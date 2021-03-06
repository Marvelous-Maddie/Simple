import React, { createContext, useState, useEffect } from "react";

export const EquipmentContext = createContext();

const EquipmentContextProvider = ({children}) => {
  const [equipment, setEquipment] = useState([]);

//Read
  useEffect(() => {
    try {
      const res = fetch("https://salty-refuge-24283.herokuapp.com/equipment")
      .then(res => res.json())
      .then(res => setEquipment(res))
    }
    catch (err) {
      console.log(err)
    }
  },[]);

//Create
  const create = (e, value) => {
    e.preventDefault();
    const {category, item, description, status} = value;

    if(!category || !item || !description || !status) {
      alert("Please fill in all fields!")
    } else {
      try {
        const res = fetch("https://salty-refuge-24283.herokuapp.com/equipment", {
        /*const res = fetch("http://localhost:4000/equipment", {*/
          method: "POST",
          headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({category, item, description, status})
        })
        .then(res => res.json())
        .then(res => setEquipment([...equipment, res]))
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
      fetch(`https://salty-refuge-24283.herokuapp.com/equipment/${id}`, {
      method:"DELETE"
      })
      .then(() => setEquipment(equipment.filter(i => i.id !== id)))
      .then(alert(`Successfully deleted`))
    }
    catch (err) {
      console.error("Error", err)
      alert("Failed to delete")
    };
  };

  return (
      <EquipmentContext.Provider value= {{equipment, setEquipment, create, discard}}>
        {children}
      </EquipmentContext.Provider>
  )
};

export default EquipmentContextProvider
