// 1. TodoList.js - Main TodoList component
import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import "./App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddTodo = (newTodoText) => {
    setTodos((prevState) => [...prevState, newTodoText]);
    setCheckboxStates((prevState) => [...prevState, false]);
  };

  const handleActions = {
    handleCheckboxChange: (index) => {
      setCheckboxStates((prevState) => [
        ...prevState.slice(0, index),
        !prevState[index],
        ...prevState.slice(index + 1),
      ]);
    },

    handleEditClick: (index, newTodoText) => {
      setTodos((prevState) => [
        ...prevState.slice(0, index),
         newTodoText,
        ...prevState.slice(index + 1),
      ]);
      setEditingIndex(-1);
    },

    handleCancelClick: () => {
      setTodos((prevState) => [...prevState]);
    },
    
    handleDeleteClick: (index) => {
      setTodos((prevState) => [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1),
      ]);

      setCheckboxStates((prevState) => [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1),
      ]);
    },

    setEditingIndex: (index) => {
      setEditingIndex(index);
    },
  };

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <ul id="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            isEditing={editingIndex === index}
            isChecked={checkboxStates[index]}
            handleActions={handleActions}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
