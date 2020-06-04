import React from "react";
import { render } from "react-dom";
import "./assets/tailwind-styles.css";
import "./i18n";
import { App } from "./components/app";
import * as serviceWorker from "./serviceWorker";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
