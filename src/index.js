import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
// WHAT IS THIS?
// This is a library that provides a way to display notifications to the user.
// It is a popular library and is used in many projects.
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <ToastContainer />
  </div>
  
);
