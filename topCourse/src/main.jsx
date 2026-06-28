import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer />
    <FaHeart />
  </StrictMode>
);