import { React } from "react";
import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./styles.css";

const el = document.getElementById("root");

const Root = createRoot(el);

Root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
