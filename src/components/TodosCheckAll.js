import React from "react";
import { connect } from "react-redux";
import { toggleTodos } from "../actions";
import { getRemainingState } from "../selectors";

const TodosCheckAll = props => (
  <React.Fragment>
    {props.remaining ? (
      <div className="todo-check-all" onClick={() => props.checkAllTodos(true)}>
        <span className="todo-check-all__icon circle">
          <i className="far fa-circle" />
        </span>
      </div>
    ) : null}
    {!props.remaining ? (
      <div
        className="todo-check-all"
        onClick={() => props.checkAllTodos(false)}
      >
        <span className="todo-check-all__icon checked">
          <i className="far fa-check-circle" />
        </span>
      </div>
    ) : null}
  </React.Fragment>
);

const mapStateToProps = state => ({
  remaining: getRemainingState(state)
});
const mapDispatchToProps = dispatch => ({
  checkAllTodos: value => dispatch(toggleTodos(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosCheckAll);
