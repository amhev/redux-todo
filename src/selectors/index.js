import { createSelector } from "reselect";
import { Filters } from "../actions";
const getRemaining = state =>
  state.todos.filter(todo => !todo.completed).length;

export const getRemainingState = createSelector(
  [getRemaining],
  remaining => remaining
);

const getCompleted = state => state.todos.filter(todo => todo.completed).length;

export const getCompletedState = createSelector(
  [getCompleted],
  completed => completed
);

const getTotal = state => state.todos.length;

export const getTotalState = createSelector(
  [getTotal],
  total => total
);

const getTodos = state => {
  switch (state.filter) {
    case Filters.ALL:
      return state.todos;
    case Filters.COMPLETED:
      return state.todos.filter(todo => todo.completed);
    case Filters.OPEN:
      return state.todos.filter(todo => !todo.completed);
    case Filters.IMPORTANT:
      return state.todos.filter(todo => todo.important);
    case Filters.STARRED:
      return state.todos.filter(todo => todo.starred);
    default:
      return state.todos;
  }
};

export const getTodosState = createSelector(
  [getTodos],
  todos => todos
);
