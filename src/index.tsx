import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "@/reducer";
import App from "@/app";

const store = createStore(reducer);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
