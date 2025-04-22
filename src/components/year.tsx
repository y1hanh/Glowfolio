import { SxProps, Typography } from "@mui/material";
import React from "react";

export function Year({
  isMobile,
  sx,
  children,
}: {
  children: React.ReactNode;
  isMobile: boolean;
  sx?: SxProps;
}) {
  return (
    <Typography
      sx={{
        color: "var(--text-primary)",
        fontWeight: 600,
        fontSize: isMobile ? "20px" : "24px",
        position: "absolute",
        left: isMobile ? "20px" : "50%",
        transform: isMobile ? "none" : "translateX(-50%)",
        backgroundColor: "var(--background-primary)",
        padding: "4px 8px",
        zIndex: 1,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
