import { Box } from "@mui/system";
import React, { useRef } from "react";

export function TimelineContainer({
  children,
  ref,
}: {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        "@media (max-width: 768px)": {
          paddingLeft: "20px",
          paddingRight: "20px",
        },
      }}
    >
      {children}
    </Box>
  );
}
