import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

export function ExperienceCard({
  sx,
  title,
  company,
  children,
  ref,
}: {
  sx: any;
  title: string;
  company: string;
  children: React.ReactNode;
  ref: (el: HTMLDivElement | null) => void;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      ref={ref}
      sx={{
        width: "45%",
        backgroundColor: "var(--card-content-bg)",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
        margin: { xs: "1rem 0", sm: "2rem 0" },
        opacity: 0,
        transform: "translateY(50px)",
        minHeight: { xs: "auto", sm: "200px" },
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      <Box
        sx={{
          backgroundColor: "var(--card-title-bg)",
          padding: { xs: "12px 16px", sm: "12px 16px" },
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: isMobile ? "8px" : "4px",
          }}
        >
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#FF5F57",
            }}
          />
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#FFBD2E",
            }}
          />
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#28C840",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "4px", sm: "16px" },
            marginLeft: { xs: 0, sm: "32px" },
            marginTop: { xs: "8px", sm: 0 },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              color: "var(--text-primary)",
              fontWeight: 600,
            }}
          >
            {title}
          </Box>
          <Box
            sx={{
              fontSize: { xs: "13px", sm: "14px" },
              color: "var(--text-primary)",
              fontWeight: 400,
            }}
          >
            {company}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          p: { xs: 2.5, sm: 3 },
          color: "var(--text-primary)",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
