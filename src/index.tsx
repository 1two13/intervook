import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { applyMiddleware, createStore } from "redux";
// import promiseMiddlerware from "redux-promise";
// import reduxThunk from "redux-thunk";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Provider store={}> */}
      <App />
      {/* </Provider> */}
    </React.StrictMode>
  </BrowserRouter>
);
