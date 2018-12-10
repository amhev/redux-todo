import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = props => {
  let input;
  return (
    <div className="add-todo">
      <span
        title="Add todo"
        className="add-todo__icon"
        onClick={() => {
          if (input.value.trim()) {
            props.addTodo(input.value.trim());
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
            props.addTodo(event.target.value.trim());
            event.target.value = "";
          } else {
            return;
          }
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
