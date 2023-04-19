//5. TodoTextInput.js - Text input for editing todo items 
import React, { useState, useEffect, useRef } from "react";

function TodoTextInput({ initialValue, onSave, onCancel }) {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSave = () => {
    onSave(value);
  };

  const handleCancel = () => {
    setValue(initialValue);
    onCancel();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave();
    } else if (event.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="edit-input"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleSave}
    />
  );
}

export default TodoTextInput;
