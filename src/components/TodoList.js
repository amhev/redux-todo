import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodosState } from "../selectors";

const mapStateToProps = state => ({
  todos: getTodosState(state)
});

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div className="list">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
export default connect(mapStateToProps)(TodoList);
