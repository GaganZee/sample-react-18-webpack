import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import Provider from "react-redux/es/components/Provider";
import App from "./app";
import store from './store/index';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
