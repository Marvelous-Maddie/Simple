import React, { createContext, useState, useEffect } from "react";

export const RoomsContext = createContext();

const RoomsContextProvider = ({children}) => {
  const [rooms, setRooms] = useState([]);

//Read
  useEffect(() => {
    try {
      const res = fetch("https://salty-refuge-24283.herokuapp.com/rooms")
      .then(res => res.json())
      .then(res => setRooms(res))
    }
    catch (err) {
      console.log(err)
    }
  },[]);

//Create
  const create = (e, value) => {
    e.preventDefault();
    const {city, street, num, floor, purpose} = value;

    if(!city || !street || !num || !floor || !purpose) {
      alert("Please fill in all fields!")
    } else {
      try {
        const res = fetch("https://salty-refuge-24283.herokuapp.com/rooms", {
        /*const res = fetch("http://localhost:4000/rooms", {*/
          method: "POST",
          headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({city, street, num, floor, purpose})
        })
        .then (res => res.json())
        .then(res => setRooms([...rooms, res]))
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
      fetch(`https://salty-refuge-24283.herokuapp.com/rooms/${id}`, {
      method:"DELETE"
      })
      .then(() => setRooms(rooms.filter(i => i.id !== id)))
      .then(alert(`Successfully deleted`))
    }
    catch (err) {
      console.error("Error", err)
      alert("Failed to delete")
    };
  };

  return (
      <RoomsContext.Provider value= {{rooms, setRooms, create, discard}}>
        {children}
      </RoomsContext.Provider>
  )
};

export default RoomsContextProvider
