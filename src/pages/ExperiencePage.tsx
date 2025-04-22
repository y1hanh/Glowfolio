import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Year } from "../components/year";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExperienceCard } from "../components/experienceCard";
import { experiencePageHeadline, experiences } from "../data";
import { ExperienceContent } from "../components/experienceContent";
import { TimelineContainer } from "../components/timelineContainer";
import { TimelineLine } from "../components/timelineLine";
import { Page } from "./Page";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      ".timeline-line",
      {
        height: 0,
      },
      {
        height: "100%",
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: isMobile ? -50 : experiences[index].position === "left" ? -50 : 50,
          y: 50,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [isMobile]);

  return (
    <Page>
      <Typography
        sx={{
          color: "var(--text-primary)",
          fontWeight: 600,
          fontSize: { xs: "28px", sm: "36px" },
          marginBottom: { xs: "0.5rem", sm: "1rem" },
          paddingX: { xs: "1rem", sm: 0 },
        }}
      >
        {experiencePageHeadline.title}
      </Typography>

      <Typography
        sx={{
          color: "var(--highlighting)",
          fontWeight: 400,
          fontSize: { xs: "15px", sm: "23px" },
          marginBottom: { xs: "2rem", sm: "4rem" },
          paddingX: { xs: "1rem", sm: 0 },
        }}
      >
        {experiencePageHeadline.subtitle}
      </Typography>

      <TimelineContainer ref={timelineRef}>
        <TimelineLine className="timeline-line" isMobile={isMobile} />
        {experiences.map((exp, index) => (
          <Box
            key={exp.year}
            sx={{
              display: "flex",
              justifyContent: isMobile
                ? "flex-start"
                : exp.position === "left"
                  ? "flex-start"
                  : "flex-end",
              position: "relative",
              "&:not(:last-child)": {
                marginBottom: { xs: "4rem", sm: "8rem" },
              },
              paddingLeft: isMobile ? "40px" : 0,
            }}
          >
            <Year
              isMobile={isMobile}
              sx={{
                top: isMobile ? "-30px" : `${index * 25}%`,
              }}
            >
              {exp.year}
            </Year>
            <ExperienceCard
              title={exp.title}
              company={exp.company}
              ref={(el: HTMLDivElement | null) =>
                (cardsRef.current[index] = el)
              }
              sx={{
                width: { xs: "100%", sm: "45%" },
                [exp.position]: isMobile ? "0" : "55%",
              }}
            >
              <Box sx={{ p: 2 }}>
                <ExperienceContent content={exp.content} />
              </Box>
            </ExperienceCard>
          </Box>
        ))}
      </TimelineContainer>
    </Page>
  );
}
