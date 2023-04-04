import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  getAccessToken,
  getRememberMe,
  removeAccessToken,
  removeRememberMe
} from "./utils/local-storage";
import { fetchAuthUser } from "./redux/auth-slice";

if (getAccessToken()) {
  store.dispatch(fetchAuthUser());
}

if (!!!getRememberMe()) {
  window.addEventListener("beforeunload", () => {
    removeAccessToken();
    removeRememberMe();
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>,
);
