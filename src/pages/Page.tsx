import { Box } from "@mui/material";
import React from "react";

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <Box
      className="page-content"
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: "4rem 2rem",
        marginTop: "80px",
      }}
    >
      {children}
    </Box>
  );
}
