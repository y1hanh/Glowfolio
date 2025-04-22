import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import "./styles/theme.css";
import { RouterProvider } from "react-router";
import router from "./router.jsx";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={{ mode: "dark" }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
