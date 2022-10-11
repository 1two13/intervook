import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import reducers from './reducers';
// import { applyMiddleware, createStore } from "redux";
// import promiseMiddlerware from "redux-promise";
// import reduxThunk from "redux-thunk";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// store 생성
// const store = createStore(reducers);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </React.StrictMode>
  </BrowserRouter>
);
