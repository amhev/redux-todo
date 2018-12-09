import React from "react";
import TodosStatus from "../../components/TodosStatus";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { expect } from "chai";

import configureStore from "redux-mock-store";
Enzyme.configure({ adapter: new Adapter() });

// create any initial state needed
const initialState = {
  todos: [
    {
      id: 1,
      text: "1",
      created: "1",
      important: false,
      starred: false,
      completed: true,
      editing: false
    }
  ],
  filter: "ALL"
};

const mockStore = configureStore();
let wrapper;
let store;

describe("tests for TodosStatus", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <TodosStatus />
      </Provider>
    );
  });

  it("renders component", () => {
    expect(wrapper.find(".status-bar")).to.have.lengthOf(1);
  });

  it("renders component", () => {
    expect(wrapper.find(".status-bar-info__remain").text()).to.have.string(
      "0%"
    );
  });
});
