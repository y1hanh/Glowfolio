import { Box } from "@mui/system";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { DemoButton, WebsiteButton } from "./buttons";

const ContentList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontFamily: "Georgia",
  "& li": {
    position: "relative",
    paddingLeft: "20px",
    marginBottom: "12px",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "var(--text-secondary)",
    "&:before": {
      content: '""',
      position: "absolute",
      left: "0",
      top: "10px",
      width: "6px",
      height: "6px",
      backgroundColor: "var(--accent)",
      borderRadius: "50%",
    },
    "&:hover": {
      color: "var(--text-primary)",
      transform: "translateX(5px)",
      transition: "all 0.3s ease",
      "&:before": {
        backgroundColor: "var(--highlighting)",
        transform: "scale(1.2)",
        transition: "all 0.3s ease",
      },
    },
    "& strong": {
      color: "var(--highlighting)",
      fontWeight: 600,
      transition: "all 0.3s ease",
      "&:hover": {
        color: "var(--accent)",
      },
    },
  },
});

const ButtonContainer = styled(Box)({
  display: "flex",
  gap: "8px",
  marginTop: "8px",
  marginBottom: "16px",
  flexWrap: "wrap",
});

const ModalOverlay = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.85)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  opacity: 0,
  animation: "fadeIn 0.3s ease forwards",
  "@keyframes fadeIn": {
    to: {
      opacity: 1,
    },
  },
});

const VideoContainer = styled(Box)({
  position: "relative",
  width: "90vw",
  maxWidth: "1200px",
  backgroundColor: "#1E1E1E",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
  transform: "scale(0.95)",
  animation: "zoomIn 0.3s ease forwards",
  "@keyframes zoomIn": {
    to: {
      transform: "scale(1)",
    },
  },
  "&::before": {
    content: '""',
    display: "block",
    paddingTop: "56.25%", // 16:9 aspect ratio
  },
  "& iframe": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "12px",
  },
});

const CloseButton = styled("button")({
  position: "absolute",
  top: "16px",
  right: "16px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  border: "none",
  color: "#FFFFFF",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  zIndex: 10,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    transform: "scale(1.1)",
  },
  "&:before": {
    content: '"×"',
  },
});

export function ExperienceContent({
  content,
}: {
  content: {
    website?: string;
    description: (string | { text: string; bold: boolean })[];
    project?: string;
  }[];
}) {
  const renderContent = (
    items: (string | { text: string; bold: boolean })[]
  ) => {
    return items.map((item, i) => {
      if (typeof item === "string") {
        return item;
      }
      return item.bold ? <strong key={i}>{item.text}</strong> : item.text;
    });
  };

  return (
    <Box
      sx={{
        color: "var(--text-primary)",
        textAlign: "left",
        padding: "8px 0",
      }}
    >
      <ContentList>
        {content.map((item, index) => {
          const [showDemo, setShowDemo] = useState(false);

          const handleClose = (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) {
              setShowDemo(false);
            }
          };

          return (
            <React.Fragment key={index}>
              <li>{renderContent(item.description)}</li>
              {(item?.website || item?.project) && (
                <ButtonContainer>
                  {item?.website && (
                    <WebsiteButton
                      onClick={() => window.open(item.website, "_blank")}
                    >
                      View Website
                    </WebsiteButton>
                  )}
                  {item?.project && (
                    <DemoButton onClick={() => setShowDemo(true)}>
                      View Demo
                    </DemoButton>
                  )}
                </ButtonContainer>
              )}
              {showDemo && (
                <ModalOverlay onClick={handleClose}>
                  <VideoContainer>
                    <CloseButton
                      onClick={() => setShowDemo(false)}
                      aria-label="Close Demo"
                    />
                    <iframe
                      src={`${item.project}?autoplay=1&mute=0`}
                      allow="autoplay; fullscreen"
                      title="Project Demo"
                    />
                  </VideoContainer>
                </ModalOverlay>
              )}
            </React.Fragment>
          );
        })}
      </ContentList>
    </Box>
  );
}
