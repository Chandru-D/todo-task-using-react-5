//3. Checkbox.js - Checkbox component
import React from "react";

function Checkbox({ index, isChecked, onCheckboxChange }) {
  return (
    <div className="green-checkbox">
    <input
      type="checkbox"
      id={`my-checkbox-${index}`}
      checked={isChecked}
      onChange={() => onCheckboxChange(index)}
    />
       <label htmlFor={`my-checkbox-${index}`}></label>
    </div>
  );
}

export default Checkbox;


/* 
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
{ {isEditing ? (
        <SaveButton onSaveClick={() => handleEditClick(index, todo)} />
      ) : (
        <EditButton index={index} onEditClick={setEditingIndex} />
      )}
      {isEditing ? (
        <CancelButton onCancelClick={() => setEditingIndex(-1)} />
      ) : (
        <DeleteButton index={index} onDeleteClick={handleDeleteClick} />
      )} }
     */
