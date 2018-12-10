import React from "react";
import TodoList from "../../components/TodoList";
import mockedState from "../../mocks/mockedState.js";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { expect } from "chai";

import configureStore from "redux-mock-store";
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
let wrapper;
let store;

describe("tests for TodoList component", () => {
  beforeEach(() => {
    store = mockStore(mockedState.getState());
    wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });

  it("renders component", () => {
    expect(wrapper.find(".list")).to.have.lengthOf(1);
  });

  it("should render list item for each todo", () => {
    const todosLength = mockedState.getState().todos.length;
    expect(wrapper.find(".list-item")).to.have.lengthOf(todosLength);
  });

  it("should render completed list item for each completed todo", () => {
    const completedLength = mockedState
      .getState()
      .todos.filter(x => x.completed).length;
    expect(wrapper.find(".list-item.completed")).to.have.lengthOf(
      completedLength
    );
  });

  it("should render opened list item for each opened todo", () => {
    const openedLength = mockedState.getState().todos.filter(x => !x.completed)
      .length;
    expect(wrapper.find(".list-item.opened")).to.have.lengthOf(openedLength);
  });
});
