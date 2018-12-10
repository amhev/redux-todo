export const addTodo = text => ({
  type: "ADD_TODO",
  text
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const toggleImportantTodo = id => ({
  type: "TOGGLE_IMPORTANT_TODO",
  id
});

export const toggleStarredTodo = id => ({
  type: "TOGGLE_STARRED_TODO",
  id
});

export const startEditTodo = id => ({
  type: "START_EDIT_TODO",
  id
});

export const editTodo = (id, event) => ({
  type: "EDIT_TODO",
  id,
  value: event.target.value
});

export const cancelEditTodo = id => ({
  type: "CANCEL_EDIT_TODO",
  id
});

export const toggleTodos = value => ({
  type: "TOGGLE_TODOS",
  value
});

export const clearCompletedTodos = () => ({
  type: "CLEAR_COMPLETED_TODOS"
});

export const setFilter = filter => ({
  type: "SET_FILTER",
  filter
});

export const Filters = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  OPEN: "OPEN",
  IMPORTANT: "IMPORTANT",
  STARRED: "STARRED"
};
