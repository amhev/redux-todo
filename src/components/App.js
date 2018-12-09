import React from "react";
import "../App.css";
import AddTodo from "./AddTodo";
import TodosStatus from "./TodosStatus";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";

const App = () => (
  <div className="app">
    <header className="header">
      <TodosStatus />
    </header>
    <section className="filters">
      <TodoFilters />
    </section>
    <section className="main">
      <TodoList />
      <AddTodo />
    </section>
  </div>
);

export default App;
