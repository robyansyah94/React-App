import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import { BrowserRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
