import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "@mui/material";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      sx={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        minWidth: "48px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        padding: 0,
        backgroundColor: theme === "dark" ? "#2d2d2d" : "#ffffff",
        border: `2px solid ${theme === "dark" ? "#3291ff" : "#0070f3"}`,
        boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.2)",
        zIndex: 999,
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: theme === "dark" ? "#3d3d3d" : "#f5f5f5",
          transform: "scale(1.1)",
        },
      }}
    >
      {theme === "dark" ? (
        // Sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          style={{ color: "#ffd700", width: "24px", height: "24px" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          style={{ color: "#4a5568", width: "24px", height: "24px" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </Button>
  );
}
