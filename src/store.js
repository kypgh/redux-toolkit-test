import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../src/features/todo/todoSlice";
import filterReducer from "../src/features/todo/filterSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
});
