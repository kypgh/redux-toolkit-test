// Home.js
import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Todos />
      <AddTodo />
    </div>
  );
}

export default Home;
