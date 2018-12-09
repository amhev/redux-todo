import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions";

const TodoFilter = ({ name, className, active, onClick }) => (
  <div onClick={onClick} className={`${className} ${active ? "active" : ""}`}>
    {name}
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
