import React from "react";
import { connect } from "react-redux";
import { toggleTodos } from "../actions";
import { getOpenState } from "../selectors";

const TodosCheckAll = props => (
  <React.Fragment>
    {props.open ? (
      <div className="todo-check-all" onClick={() => props.checkAllTodos(true)}>
        <span title="Check all" className="todo-check-all__icon circle">
          <i className="far fa-circle" />
        </span>
      </div>
    ) : null}
    {!props.open ? (
      <div
        className="todo-check-all"
        onClick={() => props.checkAllTodos(false)}
      >
        <span title="Uncheck all" className="todo-check-all__icon checked">
          <i className="far fa-check-circle" />
        </span>
      </div>
    ) : null}
  </React.Fragment>
);

const mapStateToProps = state => ({
  open: getOpenState(state)
});
const mapDispatchToProps = dispatch => ({
  checkAllTodos: value => dispatch(toggleTodos(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosCheckAll);
