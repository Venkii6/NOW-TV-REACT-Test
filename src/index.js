import React from "react";
import { render } from "react-dom";
import "sanitize.css/sanitize.css";

import { Provider } from "react-redux";
import App from "./Components/App";
import { store, history } from "./store";
import { ConnectedRouter } from "connected-react-router";

import "./index.css";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);
