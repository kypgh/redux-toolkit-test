import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const RemoveTodo = ({ todoId }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return <button onClick={() => handleRemoveTodo(todoId)}>Remove</button>;
};

export default RemoveTodo;
