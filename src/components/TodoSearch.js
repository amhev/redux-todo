import React from "react";
import { connect } from "react-redux";
import { setSearch } from "../actions";

const TodoSearch = props => {
  let input;
  return (
    <div className="todo-search">
      <input
        className="todo-search__input"
        placeholder="Search todos..."
        type="text"
        ref={node => (input = node)}
        onKeyUp={event => {
          props.setSearch(event.target.value.trim());
          if (event.key === "Enter") {
            event.target.blur();
          }
        }}
      />
      <span className="todo-search__icon search">
        <i className="fas fa-search" />
      </span>
      <span
        title="Clear search"
        className="todo-search__icon clear"
        onClick={() => {
          props.setSearch("");
          input.value = "";
        }}
      >
        <i className="fas fa-times" />
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  setSearch: term => dispatch(setSearch(term))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoSearch);
