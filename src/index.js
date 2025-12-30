import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 900,
  once: true,
  easing: "ease-out-cubic",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
