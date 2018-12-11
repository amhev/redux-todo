import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import search from "./search";

export default combineReducers({
  todos,
  filter,
  search
});
