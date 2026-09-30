import React from "react";
import ReactDOM from "react-dom/client";
import { getDefaultWebsiteConfig } from "website-core";
import { KineticTemplate } from "website-templates";
import "./index.css";

const config = getDefaultWebsiteConfig("firm_prod", "kinetic");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KineticTemplate config={config} />
  </React.StrictMode>
);
