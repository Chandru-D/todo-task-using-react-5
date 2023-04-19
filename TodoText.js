//4. TodoText.js - Todo text component
import React from "react";

function TodoText({ index, isChecked, onTodoTextClick, children }) {
  return (
    <span
      className={"todo-text " + (isChecked ? "completed" : "")}
      onClick={() => onTodoTextClick(index)}
    >
      {children}
    </span>
  );
}

export default TodoText;
