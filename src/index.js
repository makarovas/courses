import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { Provider } from "react-redux";
import store from "./store/store";
import Modal from "react-modal";

Modal.setAppElement("#root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
