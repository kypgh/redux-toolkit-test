import React from "react";
import { useSelector } from "react-redux";
import RemoveTodo from "./RemoveTodo";
import EditTodo from "./EditTodo";
import ToggleStatus from "./ToggleStatus";
import FilterStatus from "./FilterStatus";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  // todos comes from the reducer attribute name
  // in configureStore
  const filter = useSelector((state) => state.filter);

  console.log(todos);
  console.log(filter);

  return (
    <div>
      <FilterStatus />
      <ul>
        {todos
          .filter((todo) => todo.status === filter || filter === "all")
          .map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <RemoveTodo todoId={todo.id} />
              <EditTodo todo={todo} />
              <ToggleStatus todo={todo} />
            </li>
          ))}
      </ul>
    </div>
  );
}
