//9. AddTodoForm.js - Add todo form component
import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodoText = newTodo.trim();
    if (newTodoText !== "") {
      onAddTodo(newTodoText);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo"
        placeholder="Enter new todo"
        style={{ fontSize: "15px" }}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit" className="material-symbols-outlined add-button">
        add
      </button>
    </form>
  );
}

export default AddTodoForm
