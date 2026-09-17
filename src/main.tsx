import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // basic reset, not Tailwind

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Vercel serves this file from the site's root, which gives it control over
// the whole app. Keeping registration out of development avoids stale local
// Vite assets while preserving offline support in deployed builds.
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    void navigator.serviceWorker.register("/sw.js", { scope: "/" });
  });
}
