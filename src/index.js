import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux'
import store from './reducers/configureStore'

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, mountNode);