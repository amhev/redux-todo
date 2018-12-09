import filterReducer from "../../reducers/filter";

describe("Default State", () => {
  test("Default state is correct", () => {
    const action = { type: "SOME_ACTION" };
    const initialState = "ALL";

    expect(filterReducer(undefined, action)).toEqual(initialState);
  });
});

describe("SET_FILTER", () => {
  test("Set Important Filter return the correct state", () => {
    const action = { type: "SET_FILTER", filter: "IMPORTANT" };
    const state = "IMPORTANT";

    expect(filterReducer(undefined, action)).toEqual(state);
  });
});

describe("SET_FILTER", () => {
  test("Set Starred Filter return the correct state", () => {
    const action = { type: "SET_FILTER", filter: "STARRED" };
    const state = "STARRED";

    expect(filterReducer(undefined, action)).toEqual(state);
  });
});

describe("SET_FILTER", () => {
  test("Set Open Filter return the correct state", () => {
    const action = { type: "SET_FILTER", filter: "OPEN" };
    const state = "OPEN";

    expect(filterReducer(undefined, action)).toEqual(state);
  });
});

describe("SET_FILTER", () => {
  test("Set All Filter return the correct state", () => {
    const action = { type: "SET_FILTER", filter: "ALL" };
    const state = "ALL";

    expect(filterReducer(undefined, action)).toEqual(state);
  });
});

describe("SET_FILTER", () => {
  test("Set Completed Filter return the correct state", () => {
    const action = { type: "SET_FILTER", filter: "COMPLETED" };
    const state = "COMPLETED";

    expect(filterReducer(undefined, action)).toEqual(state);
  });
});
