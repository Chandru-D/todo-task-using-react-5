//7. SaveButton.js - Save button component
import React from "react";

function SaveButton({ onSaveClick }) {
  return (
    <span
      className="material-symbols-outlined save-button"
      onClick={onSaveClick}
    >
      save_as
    </span>
  );
}

export default SaveButton;
