//6. DeleteButton.js - Delete button component
import React from "react";

function DeleteButton({ index, onDeleteClick }) {
  return (
    <span
      className="material-symbols-outlined delete-button"
      onClick={() => onDeleteClick(index)}
    >
      delete
    </span>
  );
}

export default DeleteButton;
