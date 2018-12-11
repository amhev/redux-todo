import React from "react";
import TodoFilters from "../../components/TodoFilters";
import mockedState from "../../mocks/mockedState.js";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { expect } from "chai";

import configureStore from "redux-mock-store";
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
let wrapper;
let store;

describe("tests for TodoFilters component", () => {
  beforeEach(() => {
    store = mockStore(mockedState.getState());
    wrapper = mount(
      <Provider store={store}>
        <TodoFilters />
      </Provider>
    );
  });

  it("renders component", () => {
    expect(wrapper.find(".todo-filters")).to.have.lengthOf(1);
  });

  it("renders filters count", () => {
    expect(wrapper.find(".todo-filter__count")).to.have.lengthOf(5);
  });

  it("renders filter All count correctly", () => {
    const allCount = mockedState.getState().todos.length;
    expect(
      wrapper
        .find(".todo-filter.all")
        .find(".todo-filter__count")
        .text()
    ).to.equal(`(${allCount})`);
  });

  it("renders filter Open count correctly", () => {
    const openCount = mockedState.getState().todos.filter(x => !x.completed)
      .length;
    expect(
      wrapper
        .find(".todo-filter.open")
        .find(".todo-filter__count")
        .text()
    ).to.equal(`(${openCount})`);
  });

  it("renders filter Completed count correctly", () => {
    const completedCount = mockedState.getState().todos.filter(x => x.completed)
      .length;
    expect(
      wrapper
        .find(".todo-filter.completed")
        .find(".todo-filter__count")
        .text()
    ).to.equal(`(${completedCount})`);
  });

  it("renders filter Important count correctly", () => {
    const importantCount = mockedState.getState().todos.filter(x => x.important)
      .length;
    expect(
      wrapper
        .find(".todo-filter.important")
        .find(".todo-filter__count")
        .text()
    ).to.equal(`(${importantCount})`);
  });

  it("renders filter Starred count correctly", () => {
    const starredCount = mockedState.getState().todos.filter(x => x.starred)
      .length;
    expect(
      wrapper
        .find(".todo-filter.starred")
        .find(".todo-filter__count")
        .text()
    ).to.equal(`(${starredCount})`);
  });
});
