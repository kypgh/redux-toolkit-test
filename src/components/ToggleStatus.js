import React from "react";
import { useDispatch } from "react-redux";
import { toggleStatus } from "../features/todo/todoSlice";

const ToggleStatus = ({ todo }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (todo) => {
    dispatch(toggleStatus(todo));
  };

  return (
    <>
      <button
        onClick={() => {
          handleStatusChange(todo);
        }}
      >
        Toggle Status
      </button>
      <p>Current Status - {todo.status}</p>
    </>
  );
};

export default ToggleStatus;
