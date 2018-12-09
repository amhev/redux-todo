const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          id: action.id,
          text: action.text,
          important: false,
          starred: false,
          completed: false,
          editing: false
        },
        ...state
      ];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "TOGGLE_IMPORTANT_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, important: !todo.important } : todo
      );
    case "TOGGLE_STARRED_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, starred: !todo.starred } : todo
      );
    case "TOGGLE_TODOS":
      return state.map(todo => {
        return { ...todo, completed: action.value };
      });
    case "CLEAR_COMPLETED_TODOS": {
      return state.filter(todo => {
        return !todo.completed;
      });
    }
    case "START_EDIT_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, editing: true } : todo
      );
    case "CANCEL_EDIT_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, editing: false } : todo
      );

    case "EDIT_TODO":
      return state.map(todo => {
        if (action.event.target.value.trim().length === 0) {
          return todo.id === action.id ? { ...todo, editing: false } : todo;
        } else {
          return todo.id === action.id
            ? {
                ...todo,
                text: action.event.target.value.trim(),
                editing: false
              }
            : todo;
        }
      });
    default:
      return state;
  }
};

export default todos;
