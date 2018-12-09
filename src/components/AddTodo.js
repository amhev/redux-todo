import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  return (
    <div className="add-todo">
      <span className="add-todo__icon">
        <i className="fas fa-plus-circle" />
      </span>
      <input
        placeholder="Add new todo"
        autoFocus
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
