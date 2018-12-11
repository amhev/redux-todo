import configureStore from "redux-mock-store";
import * as todosActions from "../../actions/index";

const mockStore = configureStore();
const store = mockStore();

describe("todos actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches the correct action and payload for remove todo", () => {
    const expectedActions = [
      {
        id: 1,
        type: "REMOVE_TODO"
      }
    ];
    store.dispatch(todosActions.removeTodo(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for toggle completed todo", () => {
    const expectedActions = [
      {
        id: 1,
        type: "TOGGLE_TODO"
      }
    ];
    store.dispatch(todosActions.toggleTodo(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for toggle important todo", () => {
    const expectedActions = [
      {
        id: 1,
        type: "TOGGLE_IMPORTANT_TODO"
      }
    ];
    store.dispatch(todosActions.toggleImportantTodo(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for toggle starred todo", () => {
    const expectedActions = [
      {
        id: 1,
        type: "TOGGLE_STARRED_TODO"
      }
    ];
    store.dispatch(todosActions.toggleStarredTodo(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for start edit todo", () => {
    const expectedActions = [
      {
        id: 1,
        type: "START_EDIT_TODO"
      }
    ];
    store.dispatch(todosActions.startEditTodo(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for edit todo", () => {
    const expectedActions = [
      {
        id: 1,
        value: "text",
        type: "EDIT_TODO"
      }
    ];
    store.dispatch(todosActions.editTodo(1, { target: { value: "text" } }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for cancel edit todo", () => {
    const expectedActions = [
      {
        id: 1,
        type: "CANCEL_EDIT_TODO"
      }
    ];
    store.dispatch(todosActions.cancelEditTodo(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for toggle all todos", () => {
    const expectedActions = [
      {
        value: true,
        type: "TOGGLE_TODOS"
      }
    ];
    store.dispatch(todosActions.toggleTodos(true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for clear completed todos", () => {
    const expectedActions = [
      {
        type: "CLEAR_COMPLETED_TODOS"
      }
    ];
    store.dispatch(todosActions.clearCompletedTodos());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for set filter", () => {
    const expectedActions = [
      {
        filter: "filter",
        type: "SET_FILTER"
      }
    ];
    store.dispatch(todosActions.setFilter("filter"));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches the correct action and payload for set search", () => {
    const expectedActions = [
      {
        term: "text",
        type: "SET_SEARCH"
      }
    ];
    store.dispatch(todosActions.setSearch("text"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
