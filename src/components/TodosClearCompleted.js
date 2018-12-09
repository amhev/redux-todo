import React from "react";
import { connect } from "react-redux";
import { clearCompletedTodos } from "../actions";
import { getCompletedState } from "../selectors";

const TodosClearCompleted = props =>
  props.completed ? (
    <React.Fragment>
      <span
        className="todo-clear-completed"
        onClick={() => props.clearCompletedTodos()}
      >
        Clear Completed
      </span>
    </React.Fragment>
  ) : null;

const mapStateToProps = state => ({
  completed: getCompletedState(state)
});
const mapDispatchToProps = dispatch => ({
  clearCompletedTodos: () => dispatch(clearCompletedTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosClearCompleted);
