import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../features/todo/todoSlice";

const EditTodo = ({ todo }) => {
  const [editedText, setEditedText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEditTodo = (id, text) => {
    dispatch(editTodo({ id, text }));
  };

  return (
    <div>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={() => handleEditTodo(todo.id, editedText)}>Edit</button>
    </div>
  );
};

export default EditTodo;
