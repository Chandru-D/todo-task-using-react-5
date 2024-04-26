//5. EditButton.js - Edit button component
import React from "react";

function EditButton({ index, onEditClick }) {
  return (
    <span
      className="material-symbols-outlined edit-button"
      onClick={() => onEditClick(index)}
    >
      edit is changing from remote
      fn for changing the bubble sort
    </span>
  );
}

export default EditButton;
