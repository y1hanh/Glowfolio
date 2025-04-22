import React from "react";
import { Page } from "./Page";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Paper,
  Stack,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { profile } from "../data";
import { ActionButton } from "../components/buttons";
import { useNavigate } from "react-router";

export function Profile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <Page>
      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          backgroundColor: "var(--card-title-bg)",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 2 : 4,
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          <Box
            component="img"
            src={profile.picture}
            sx={{
              width: isMobile ? 200 : 300,
              height: isMobile ? 200 : 300,
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              textAlign: isMobile ? "center" : "left",
              width: "100%",
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h1"
              gutterBottom
              sx={{
                fontSize: isMobile ? "1.75rem" : "3rem",
                mb: isMobile ? 1 : 2,
              }}
            >
              {profile.name}
            </Typography>
            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              color="var(--text-secondary)"
              gutterBottom
              sx={{ mb: isMobile ? 0.5 : 1 }}
            >
              {profile.role}
            </Typography>
            <Typography
              variant={isMobile ? "body2" : "body1"}
              color="var(--text-secondary)"
              gutterBottom
              sx={{ mb: isMobile ? 0.5 : 1 }}
            >
              {profile.location}
            </Typography>
            <Typography
              variant={isMobile ? "body1" : "h6"}
              color="var(--text-primary)"
              gutterBottom
              sx={{
                fontSize: isMobile ? "1rem" : "1.25rem",
                mb: isMobile ? 1 : 2,
              }}
            >
              {profile.introduction}
            </Typography>
            <Stack
              direction="row"
              spacing={isMobile ? 1 : 2}
              sx={{
                justifyContent: isMobile ? "center" : "flex-start",
                mt: isMobile ? 1 : 2,
              }}
            >
              <IconButton
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{
                  "&:hover": {
                    color: "var(--highlighting)",
                  },
                }}
              >
                <FaGithub size={24} />
              </IconButton>
              <IconButton
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  "&:hover": {
                    color: "var(--highlighting)",
                  },
                }}
              >
                <FaLinkedin size={24} />
              </IconButton>
              <IconButton
                href={`mailto:${profile.email}`}
                target="_blank"
                aria-label="Email"
                sx={{
                  "&:hover": {
                    color: "var(--highlighting)",
                  },
                }}
              >
                <FaEnvelope size={24} />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 1 : 2,
            justifyContent: "center",

            width: "100%",
            mt: isMobile ? 2 : 3,
          }}
        >
          <ActionButton onClick={() => navigate("/experience")}>
            Check my experience
          </ActionButton>
          <ActionButton onClick={() => navigate("/project")}>
            Check my projects
          </ActionButton>
        </Box>

        {/* Extracurricular Activities Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 2 : 3,
            mt: isMobile ? 3 : 4,
          }}
        >
          {profile.extracurricularImage && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? 2 : 3,
                flex: 1,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  color="var(--text-primary)"
                  component="h2"
                  gutterBottom
                  sx={{
                    textAlign: isMobile ? "center" : "left",
                    fontSize: isMobile ? "1.5rem" : "2.125rem",
                    mb: isMobile ? 1.5 : 2,
                  }}
                >
                  Beside Coding...
                </Typography>

                <ImageList
                  sx={{
                    width: "100%",
                    borderRadius: 1,
                    overflow: "hidden",
                    margin: "0 auto",
                    height: isMobile ? 200 : 300,
                  }}
                  cols={isMobile ? 1 : 2}
                  rowHeight={isMobile ? 200 : 300}
                >
                  <ImageListItem>
                    <img
                      src={profile.extracurricularImage}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                  </ImageListItem>
                </ImageList>

                <Box
                  sx={{
                    textAlign: isMobile ? "center" : "left",
                    mt: isMobile ? 1.5 : 2,
                  }}
                >
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    color="var(--text-primary)"
                    gutterBottom
                    sx={{
                      fontSize: isMobile ? "1.25rem" : "1.5rem",
                      mb: isMobile ? 0.5 : 1,
                    }}
                  >
                    {profile.extracurricular}
                  </Typography>
                  <Typography
                    variant={isMobile ? "body1" : "h6"}
                    color="var(--text-secondary)"
                    sx={{
                      fontSize: isMobile ? "0.875rem" : "1rem",
                    }}
                  >
                    {profile.extracurricularDescription}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
          {profile.pet && (
            <Box sx={{ flex: 1 }}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                color="var(--text-primary)"
                component="h2"
                gutterBottom
                sx={{
                  textAlign: isMobile ? "center" : "left",
                  fontSize: isMobile ? "1.5rem" : "2.125rem",
                  mb: isMobile ? 1.5 : 2,
                }}
              >
                {profile.petDescription}
              </Typography>
              {profile.petImage && profile.petImage.length > 0 && (
                <ImageList
                  sx={{
                    width: "100%",
                    height: isMobile ? 400 : 600,
                    borderRadius: 1,
                    overflow: "hidden",
                    margin: "0 auto",
                  }}
                  cols={isMobile ? 1 : 3}
                  rowHeight={isMobile ? 200 : 300}
                  gap={isMobile ? 8 : 16}
                >
                  {profile.petImage.map((image, index) => (
                    <ImageListItem key={index}>
                      <img
                        src={image}
                        alt={`Pet Image ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              )}
            </Box>
          )}
        </Box>
      </Container>
    </Page>
  );
}
