//8.  CancelButton.js - Cancel button component
import React from "react";

function CancelButton({ onCancelClick }) {
  return (
    <span
      className="material-symbols-outlined cancel-button"
      onClick={onCancelClick}
    >
      close
    </span>
  );
}

export default CancelButton;
