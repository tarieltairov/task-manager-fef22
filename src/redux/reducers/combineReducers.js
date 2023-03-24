import { combineReducers } from "redux";
import { todos } from "./todosReducer";

const createRootReducer = combineReducers({
  todos: todos,
});

export default createRootReducer;
