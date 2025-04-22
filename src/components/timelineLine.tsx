import { Box } from "@mui/material";
import React from "react";

export function TimelineLine({
  isMobile,
  className,
  children,
}: {
  isMobile: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Box
      className={className}
      sx={{
        position: "absolute",
        left: isMobile ? "20px" : "50%",
        transform: isMobile ? "none" : "translateX(-50%)",
        width: "3px",
        height: "100%",
        backgroundColor: "var(--highlighting)",
      }}
    >
      {children}
    </Box>
  );
}
