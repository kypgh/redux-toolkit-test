import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        text: action.payload,
        status: "incomplete",
      };
      state.push(todo);
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
    toggleStatus: (state, action) => {
      const { id, status } = action.payload;

      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.status =
          status === "incomplete" ? "complete" : "incomplete";
      }
    },
  },
});

// this is for dispatch
export const { addTodo, removeTodo, editTodo, toggleStatus } =
  todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
