import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div className="add-todo">
      <span
        className="add-todo__icon"
        onClick={() => {
          if (input.value.trim()) {
            dispatch(addTodo(input.value.trim()));
            input.value = "";
          } else {
            return;
          }
        }}
      >
        <i className="fas fa-plus-circle" />
      </span>
      <input
        placeholder="Add new todo"
        autoFocus
        ref={node => (input = node)}
        onKeyUp={event => {
          if (event.key === "Enter" && event.target.value.trim()) {
            dispatch(addTodo(event.target.value.trim()));
            event.target.value = "";
          } else {
            return;
          }
        }}
      />
    </div>
  );
};

export default connect()(AddTodo);
