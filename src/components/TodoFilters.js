import React from "react";
import TodoFilter from "./TodoFilter";
import { connect } from "react-redux";
import TodosCheckAll from "./TodosCheckAll";
import TodosClearCompleted from "./TodosClearCompleted";
import {
  getTotalState,
  getCompletedState,
  getOpenState,
  getImportantState,
  getStarredState
} from "../selectors";
import { Filters } from "../actions";

const TodoFilters = props =>
  props.total > 0 ? (
    <React.Fragment>
      <TodosCheckAll />
      <div className="todo-filters">
        <TodoFilter
          filter={Filters.ALL}
          count={props.total}
          name="All"
          className="todo-filter all"
        />
        <TodoFilter
          filter={Filters.OPEN}
          count={props.open}
          name="Open"
          className="todo-filter open"
        />
        <TodoFilter
          filter={Filters.COMPLETED}
          count={props.completed}
          name="Completed"
          className="todo-filter completed"
        />
        <TodoFilter
          filter={Filters.IMPORTANT}
          count={props.important}
          name="Important"
          className="todo-filter important"
        />
        <TodoFilter
          filter={Filters.STARRED}
          count={props.starred}
          name="Starred"
          className="todo-filter starred"
        />
        <TodosClearCompleted />
      </div>
    </React.Fragment>
  ) : null;

const mapStateToProps = state => ({
  total: getTotalState(state),
  completed: getCompletedState(state),
  open: getOpenState(state),
  important: getImportantState(state),
  starred: getStarredState(state)
});

export default connect(mapStateToProps)(TodoFilters);
