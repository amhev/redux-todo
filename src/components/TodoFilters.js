import React from "react";
import TodoFilter from "./TodoFilter";
import { connect } from "react-redux";
import TodosCheckAll from "./TodosCheckAll";
import TodosClearCompleted from "./TodosClearCompleted";
import { getTotalState } from "../selectors";
import { Filters } from "../actions";

const TodoFilters = props =>
  props.total > 0 ? (
    <React.Fragment>
      <TodosCheckAll />
      <div className="todo-filters">
        <TodoFilter
          filter={Filters.ALL}
          name="All"
          className="todo-filter all"
        />
        <TodoFilter
          filter={Filters.OPEN}
          name="Open"
          className="todo-filter open"
        />
        <TodoFilter
          filter={Filters.COMPLETED}
          name="Completed"
          className="todo-filter completed"
        />
        <TodoFilter
          filter={Filters.IMPORTANT}
          name="Important"
          className="todo-filter important"
        />
        <TodoFilter
          filter={Filters.STARRED}
          name="Starred"
          className="todo-filter starred"
        />
        <TodosClearCompleted />
      </div>
    </React.Fragment>
  ) : null;

const mapStateToProps = state => ({
  total: getTotalState(state)
});

export default connect(mapStateToProps)(TodoFilters);
