import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions";

const TodoFilter = props => (
  <div
    onClick={props.onClick}
    className={`${props.className} ${props.active ? "active" : ""}`}
  >
    {props.name} <span className="todo-filter__count">({props.count})</span>
  </div>
);
const mapStateToProps = (state, props) => ({
  active: props.filter === state.filter
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(setFilter(props.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter);
