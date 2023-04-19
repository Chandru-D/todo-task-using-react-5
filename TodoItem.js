// 2. TodoItem.js - Wrapper for todo item components
import React from "react";
import Checkbox from "./Checkbox";
import TodoText from "./TodoText";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import TodoTextInput from "./TodoTextInput";

function TodoItem({
  todo,
  index,
  isEditing,
  isChecked,
  handleActions,
}) {
  const { handleCheckboxChange, setEditingIndex, handleEditClick, handleDeleteClick } = handleActions;

  return (
    <li className={isChecked ? "selected" : ""}>
      <Checkbox index={index} isChecked={isChecked} onCheckboxChange={handleCheckboxChange} />
      {isEditing ? (
        <TodoTextInput
          initialValue={todo}
          onSave={(newTodoText) => handleEditClick(index, newTodoText)}
          onCancel={() => setEditingIndex(-1)}
        />
      ) : (
        <TodoText index={index} isChecked={isChecked} onTodoTextClick={setEditingIndex}>
          {todo}
        </TodoText>
      )}
      {isEditing ? (
        <SaveButton onSaveClick={() => handleEditClick(index, todo)} />
      ) : (
        <EditButton index={index} onEditClick={setEditingIndex} />
      )}
      {isEditing ? (
        <CancelButton onCancelClick={() => setEditingIndex(-1)} />
      ) : (
        <DeleteButton index={index} onDeleteClick={handleDeleteClick} />
        )} 
     
    </li>
  );
}

export default TodoItem;