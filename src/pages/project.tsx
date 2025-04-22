import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../data";
import { ProjectCard } from "../components/projectCard";
import { Page } from "./page";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Project() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Page>
      <Container maxWidth={isMobile ? "xs" : "xl"}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "var(--text-primary)",
              fontWeight: 600,
              mb: { xs: 3, md: 5 },
              textAlign: "center",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: { xs: 2, md: 3 },
            }}
          >
            {projects.map((project) => (
              <Box key={project.name} sx={{ width: "100%" }}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  thumbnail={project.thumbnail}
                  technologies={project.technologies}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                />
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Page>
  );
}
