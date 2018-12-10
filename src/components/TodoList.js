import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodosState } from "../selectors";

const TodoList = ({ todos }) => {
  return (
    <div className="list">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: getTodosState(state)
});

export default connect(mapStateToProps)(TodoList);
