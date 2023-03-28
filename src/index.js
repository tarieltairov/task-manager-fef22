import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import ExampleContextProvider from "./context";
import "./index.css";
import store from "./redux-toolkit/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ExampleContextProvider>
        <App />
      </ExampleContextProvider>
    </Provider>
  </React.StrictMode>
);
