import searchReducer from "../../reducers/search";

describe("search reducer Default State", () => {
  test("Default state is correct", () => {
    const action = { type: "SOME_ACTION" };
    const initialState = "";

    expect(searchReducer(undefined, action)).toEqual(initialState);
  });
});

describe("search reducer", () => {
  test("should handle SET_SEARCH", () => {
    const action = { type: "SET_SEARCH", term: "text" };
    const expectedState = "text";

    expect(searchReducer(undefined, action)).toEqual(expectedState);
  });
});
