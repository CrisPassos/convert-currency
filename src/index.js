import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import "../src/assets/scss/_base.scss";
import App from "../src/containers/App/App";

//TODO: chamar a API em background
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
