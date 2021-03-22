import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./redux/rootReducer";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk))

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof rootReducer>

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

