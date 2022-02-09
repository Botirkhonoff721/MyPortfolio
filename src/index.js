import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./root/Root";
import "../node_modules/normalize.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
