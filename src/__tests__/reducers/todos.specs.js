import todosReducer from "../../reducers/todos";
import mockedState from "../../mocks/mockedState.js";

describe("todos reducer Default State", () => {
  test("Default state is correct", () => {
    const action = { type: "SOME_ACTION" };
    const initialState = [];

    expect(todosReducer(undefined, action)).toEqual(initialState);
  });
});

describe("ADD_TODO", () => {
  test("should add a todo at the end of the todo list", () => {
    const action = { type: "ADD_TODO", text: "some_text" };
    const newState = todosReducer(mockedState.getTodosState(), action);
    const newTodo = newState[newState.length - 1];

    expect(newState).toHaveLength(mockedState.getTodosState().length + 1);
    expect(newTodo.text).toEqual("some_text");
    expect(newTodo.important).toBe(false);
    expect(newTodo.starred).toBe(false);
    expect(newTodo.completed).toBe(false);
    expect(newTodo.editing).toBe(false);
  });
});

describe("REMOVE_TODO", () => {
  test("should remove a todo from the todo list", () => {
    const action = { type: "REMOVE_TODO", id: 2 };
    const newState = todosReducer(mockedState.getTodosState(), action);
    expect(newState.some(x => x.id === 2)).toBe(false);
  });
});

describe("TOGGLE_TODO", () => {
  test("should toggle todo complete property", () => {
    const action = { type: "TOGGLE_TODO", id: 2 };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.find(x => x.id === 2).completed).toBe(true);
  });

  test("should not toggle all todos complete property", () => {
    const action = { type: "TOGGLE_TODO", id: 2 };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.filter(x => x.completed).length).toEqual(2);
  });
});

describe("TOGGLE_IMPORTANT_TODO", () => {
  test("should toggle todo important property", () => {
    const action = { type: "TOGGLE_IMPORTANT_TODO", id: 3 };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.find(x => x.id === 3).important).toBe(false);
  });

  test("should not toggle all todos important property", () => {
    const action = { type: "TOGGLE_IMPORTANT_TODO", id: 3 };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.filter(x => x.important).length).toEqual(0);
  });
});

describe("TOGGLE_STARRED_TODO", () => {
  test("should toggle todo starred property", () => {
    const action = { type: "TOGGLE_STARRED_TODO", id: 1 };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.find(x => x.id === 1).starred).toBe(true);
  });

  test("should not toggle all todos starred property", () => {
    const action = { type: "TOGGLE_STARRED_TODO", id: 2 };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.filter(x => x.starred).length).toEqual(2);
  });
});

describe("TOGGLE_TODOS", () => {
  test("should toggle all todo complete property to false", () => {
    const action = { type: "TOGGLE_TODOS", value: false };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.some(x => x.completed)).toBe(false);
  });

  test("should toggle all todo complete property to true", () => {
    const action = { type: "TOGGLE_TODOS", value: true };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.every(x => x.completed)).toBe(true);
  });
});

describe("CLEAR_COMPLETED_TODOS", () => {
  test("should remove all complete todos", () => {
    const action = { type: "CLEAR_COMPLETED_TODOS" };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.some(x => x.completed)).toBe(false);
  });

  test("should remove ONLY complete todos", () => {
    const action = { type: "CLEAR_COMPLETED_TODOS" };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.length).toEqual(2);
  });
});

describe("START_EDIT_TODO", () => {
  test("should change editing todo to true", () => {
    const action = { type: "START_EDIT_TODO", id: 1 };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.find(x => x.id === 1).editing).toBe(true);
  });
});

describe("CANCEL_EDIT_TODO", () => {
  test("should change editing todo to false", () => {
    const action = { type: "CANCEL_EDIT_TODO", id: 1 };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.find(x => x.id === 1).editing).toBe(false);
  });
});

describe("EDIT_TODO", () => {
  test("should not update todo with empty string", () => {
    const action = { type: "EDIT_TODO", id: 1, value: "" };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.find(x => x.id === 1).text === "").toBe(false);
  });

  test("should update todo with none string", () => {
    const action = { type: "EDIT_TODO", id: 1, value: "new text" };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.find(x => x.id === 1).text === "new text").toBe(true);
  });

  test("should set editing property to false", () => {
    const action = { type: "EDIT_TODO", id: 1, value: "new text" };
    const newState = todosReducer(mockedState.getTodosState(), action);

    expect(newState.find(x => x.id === 1).editing).toBe(false);
  });
});
