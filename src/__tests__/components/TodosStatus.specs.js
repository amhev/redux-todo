import React from "react";
import TodosStatus from "../../components/TodosStatus";
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

describe("tests for TodosStatus component", () => {
  beforeEach(() => {
    store = mockStore(mockedState.getState());
    wrapper = mount(
      <Provider store={store}>
        <TodosStatus />
      </Provider>
    );
  });

  it("renders component", () => {
    expect(wrapper.find(".status-bar")).to.have.lengthOf(1);
  });

  it("renders title with the right values", () => {
    expect(wrapper.find(".status-bar-info__remain").text()).to.have.string(
      "67%"
    );
  });

  it("renders progress bar with the right percentages", () => {
    expect(wrapper.find(".progress-bar-completed").prop("style")).to.deep.equal(
      { width: "33%" }
    );
  });
});
