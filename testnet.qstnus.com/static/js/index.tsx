import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import reportWebVitals from "report-web-vitals";
import { router } from "router";

import "./configs/big-number";

import "./global.css";
import "./styles.css";
import "@sekmet/radix-ui-themes/styles.css";

import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import "@near-wallet-selector/modal-ui/styles.css";
import "@rainbow-me/rainbowkit/styles.css";

import "@solana/wallet-adapter-react-ui/styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
