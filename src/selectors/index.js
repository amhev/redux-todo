import { createSelector } from "reselect";
import { Filters } from "../actions";

const getTotal = state => state.todos.length;

export const getTotalState = createSelector(
  [getTotal],
  total => total
);

const getCompleted = state => state.todos.filter(todo => todo.completed).length;

export const getCompletedState = createSelector(
  [getCompleted],
  completed => completed
);

const getOpen = state => state.todos.filter(todo => !todo.completed).length;

export const getOpenState = createSelector(
  [getOpen],
  open => open
);

const getImportant = state => state.todos.filter(todo => todo.important).length;

export const getImportantState = createSelector(
  [getImportant],
  important => important
);

const getStarred = state => state.todos.filter(todo => todo.starred).length;

export const getStarredState = createSelector(
  [getStarred],
  starred => starred
);

const getTodos = state => {
  switch (state.filter) {
    case Filters.ALL:
      return state.todos.filter(
        todo => !state.search || todo.text.includes(state.search)
      );
    case Filters.COMPLETED:
      return state.todos.filter(
        todo =>
          todo.completed && (!state.search || todo.text.includes(state.search))
      );
    case Filters.OPEN:
      return state.todos.filter(
        todo =>
          !todo.completed && (!state.search || todo.text.includes(state.search))
      );
    case Filters.IMPORTANT:
      return state.todos.filter(
        todo =>
          todo.important && (!state.search || todo.text.includes(state.search))
      );
    case Filters.STARRED:
      return state.todos.filter(
        todo =>
          todo.starred && (!state.search || todo.text.includes(state.search))
      );
    default:
      return state.todos;
  }
};

export const getTodosState = createSelector(
  [getTodos],
  todos => todos
);
