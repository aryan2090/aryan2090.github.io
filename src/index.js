import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import "./styles/test.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
