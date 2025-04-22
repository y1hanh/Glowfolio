import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery, Modal } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "../dataType";
import { ActionButton, WebsiteButton } from "./Buttons";

export function ProjectCard({
  name,
  description,
  thumbnail,
  technologies = [],
  demoUrl,
  githubUrl,
}: ProjectData) {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const renderContent = (
    content: { text: string; bold: boolean; hyperlink?: string }[][]
  ) => {
    return content.map((item, index) => (
      <li style={{ listStyleType: "none" }} key={index}>
        {item.map((text, textIndex) => (
          <span key={textIndex}>
            {text.bold ? <strong>{text.text}</strong> : text.text}
            {text.hyperlink && (
              <a
                href={text.hyperlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {text.text}
              </a>
            )}
          </span>
        ))}
      </li>
    ));
  };

  const CompactView = () => (
    <Box
      onClick={() => setIsExpanded(true)}
      sx={{
        backgroundColor: "var(--card-content-bg)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        overflow: "scroll",
        scrollbarWidth: "none",
        position: "relative",
        width: "100%",
        height: "320px",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "200px",
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: "var(--text-primary)",
            fontWeight: 600,
            mb: 1,
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {technologies.map((tech) => (
            <Box
              key={tech}
              sx={{
                backgroundColor: "var(--highlighting)",
                color: "var(--text-primary)",
                fontWeight: 600,
                padding: "2px 8px",
                borderRadius: "4px",
                fontSize: "0.8rem",
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );

  const ExpandedView = () => (
    <Modal
      open={isExpanded}
      onClose={() => setIsExpanded(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        style={{ width: "100%", maxWidth: "1000px" }}
      >
        <Box
          sx={{
            backgroundColor: "var(--card-content-bg)",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            height: { xs: "auto", sm: "500px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "40%" },
              minWidth: { sm: "400px" },
              height: { xs: "200px", sm: "auto" },
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Box
            sx={{
              flex: "1",
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: "1.1rem", sm: "1.5rem" },
                }}
              >
                {name}
              </Typography>

              <Typography
                sx={{
                  color: "var(--text-secondary)",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {renderContent(description)}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 3,
                }}
              >
                {technologies.map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      backgroundColor: "var(--highlighting)",
                      color: "var(--text-primary)",
                      padding: "4px 12px",
                      borderRadius: "4px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              {githubUrl && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ textDecoration: "none" }}
                >
                  <ActionButton>View Code</ActionButton>
                </motion.a>
              )}
              {demoUrl && (
                <motion.a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ textDecoration: "none" }}
                >
                  <WebsiteButton>Check out</WebsiteButton>
                </motion.a>
              )}
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Modal>
  );

  return (
    <AnimatePresence>
      <CompactView />
      {isExpanded && <ExpandedView />}
    </AnimatePresence>
  );
}
