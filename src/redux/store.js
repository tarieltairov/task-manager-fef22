import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./reducers/combineReducers";

const middleware = [thunk];

const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
