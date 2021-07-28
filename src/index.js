import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);