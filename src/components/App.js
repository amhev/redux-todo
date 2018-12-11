import React from "react";
import "../App.css";
import AddTodo from "./AddTodo";
import TodosStatus from "./TodosStatus";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";
import TodoSearch from "./TodoSearch";

const App = () => (
  <div className="app">
    <header className="header">
      <TodosStatus />
      <TodoSearch />
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
