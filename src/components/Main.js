import React from "react";
import List from "./List";

function Main({ input, todoList }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <List input={input} todoList={todoList} />
    </section>
  );
}

export default Main;
