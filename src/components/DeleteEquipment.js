import React, { useContext } from "react";
import { EquipmentContext } from "../context/EquipmentContext";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteEquipment = id => {
  const {discard} = useContext(EquipmentContext);

  const handleClick = (e) => {
    if(window.confirm(`Are you sure you want to delete this entry?`)) {
      discard(id.id)
    }
  };

  return (
    <Button variant="primary" onClick={handleClick}><FontAwesomeIcon icon={faTrash} /></Button>
  )
};

export default DeleteEquipment
