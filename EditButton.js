//5. EditButton.js - Edit button component
import React from "react";

function EditButton({ index, onEditClick }) {
  return (
    <span
      className="material-symbols-outlined edit-button"
      onClick={() => onEditClick(index)}
    >
      edit is changing from remote
    </span>
  );
}

export default EditButton;
