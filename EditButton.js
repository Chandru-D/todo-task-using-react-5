//5. EditButton.js - Edit button component
import React from "react";

function EditButton({ index, onEditClick }) {
  return (
    <span
      className="material-symbols-outlined edit-button"
      onClick={() => onEditClick(index)}
    >
      edit
    </span>
  );
}

export default EditButton;
