import filterReducer from "../../reducers/filter";

describe("filter reducer Default State", () => {
  test("Default state is correct", () => {
    const action = { type: "SOME_ACTION" };
    const initialState = "ALL";

    expect(filterReducer(undefined, action)).toEqual(initialState);
  });
});

describe("filter reducer", () => {
  test("should handle SET_FILTER IMPORTANT", () => {
    const action = { type: "SET_FILTER", filter: "IMPORTANT" };
    const expectedState = "IMPORTANT";

    expect(filterReducer(undefined, action)).toEqual(expectedState);
  });

  test("should handle SET_FILTER STARRED", () => {
    const action = { type: "SET_FILTER", filter: "STARRED" };
    const expectedState = "STARRED";

    expect(filterReducer(undefined, action)).toEqual(expectedState);
  });

  test("should handle SET_FILTER OPEN", () => {
    const action = { type: "SET_FILTER", filter: "OPEN" };
    const expectedState = "OPEN";

    expect(filterReducer(undefined, action)).toEqual(expectedState);
  });

  test("should handle SET_FILTER ALL", () => {
    const action = { type: "SET_FILTER", filter: "ALL" };
    const expectedState = "ALL";

    expect(filterReducer(undefined, action)).toEqual(expectedState);
  });

  test("should handle SET_FILTER COMPLETED", () => {
    const action = { type: "SET_FILTER", filter: "COMPLETED" };
    const expectedState = "COMPLETED";

    expect(filterReducer(undefined, action)).toEqual(expectedState);
  });
});
