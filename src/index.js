import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DesignSystem from "./DesignSystem";
import SpaceTourism from "./SpaceTourism";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {false && <DesignSystem />}
    <SpaceTourism />
  </React.StrictMode>
);
