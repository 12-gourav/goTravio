import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </BrowserRouter>
  </StrictMode>
);
