import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteEquipment = (id) => {
  const handleClick = (e) => {
    const confirmation = window.confirm(`Are you sure you want to delete this entry?`);
    fetch(`https://salty-refuge-24283.herokuapp.com/equipment/${id}`, {
      method:"delete"
    })
    .catch((err) => {
      console.error("Error", err)
      alert("Failed to delete")
    });
    alert(`Successfully deleted`)
  }

  return (
    <Button variant="primary" onClick={handleClick}><FontAwesomeIcon icon={faTrash} /></Button>
  )
};

export default DeleteEquipment
