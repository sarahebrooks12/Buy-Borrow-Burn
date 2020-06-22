import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Main from "./components/Main";

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Main />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
