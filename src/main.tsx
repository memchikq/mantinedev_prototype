import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
