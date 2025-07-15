"use client";
import { Stack, Typography, Box, Chip, Button } from "@mui/material";
import CustomCard from "@/components/CustomCard/CustomCard";
import WhatIKnow from "@/components/WhatIKnowCard/WhatIKnow";
import { Fragment } from "react";
import {
  Code as CodeIcon,
  Work as WorkIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import styles from "./page.module.css";
import { useTheme } from "@/contexts/ThemeContext";
import { getThemeStyles } from "@/utils/themeUtils";

export default function Home() {
  const { theme } = useTheme();
  const themeStyles = getThemeStyles(theme);

  return (
    <Fragment>
      {/* Hero Section */}
      <Stack
        direction={"row"}
        spacing={3}
        sx={{
          padding: { xs: 2, md: 4 },
          marginBottom: 4,
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: themeStyles.text.secondary,
            textAlign: { xs: "center", md: "left" },
            fontWeight: 400,
            lineHeight: 1.5,
            maxWidth: "600px",
          }}
        >
          Full-stack developer passionate about creating innovative web
          solutions with modern technologies
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
            width: "100%",
          }}
        >
          <Chip
            icon={<CodeIcon />}
            label="React, React Native & Next.js"
            sx={{
              backgroundColor: "rgba(97, 218, 251, 0.2)",
              color: "#61DAFB",
              border: "1px solid rgba(97, 218, 251, 0.3)",
              fontWeight: 600,
            }}
          />
          <Chip
            icon={<WorkIcon />}
            label="Node.js, NestJs & Express"
            sx={{
              backgroundColor: "rgba(76, 175, 80, 0.2)",
              color: "#4CAF50",
              border: "1px solid rgba(76, 175, 80, 0.3)",
              fontWeight: 600,
            }}
          />
          <Chip
            icon={<StarIcon />}
            label="TypeScript"
            sx={{
              backgroundColor: "rgba(49, 120, 198, 0.2)",
              color: "#3178C6",
              border: "1px solid rgba(49, 120, 198, 0.3)",
              fontWeight: 600,
            }}
          />
        </Stack>
      </Stack>

      {/* Projects Section */}
      <Stack spacing={3} sx={{ padding: { xs: 2, md: 4 }, width: "100%" }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ marginBottom: 2 }}
        >
          <TrendingUpIcon sx={{ color: "#3B82F6", fontSize: "32px" }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: themeStyles.text.primary,
            }}
          >
            Featured Projects
          </Typography>
        </Stack>

        <Typography
          variant="body1"
          sx={{
            color: themeStyles.text.secondary,
            marginBottom: 3,
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          A collection of my recent work showcasing full-stack development
          skills, modern UI/UX design, and scalable architecture solutions.
        </Typography>

        <Stack
          gap={3}
          direction={"row"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <CustomCard
            title={"Skillofin Website"}
            description={
              "Collaborative project - A modern educational platform website built with Next.js and TypeScript. Features include course management, user authentication, and responsive design."
            }
            className={styles.projectCard}
            techStack={["Next.js", "TypeScript", "Collaboration", "Education"]}
            githubUrl="https://github.com/skillofinit/skillofin-website"
          />
          <CustomCard
            title={"RustReels - Video Platform"}
            description={
              "A video sharing platform built with Rust and modern web technologies. Features include video upload, streaming, and social sharing capabilities."
            }
            className={styles.projectCard}
            techStack={["Rust", "JavaScript", "Video API", "Web Technologies"]}
            githubUrl="https://github.com/shivkr1357/RustReelsNew"
          />
          <CustomCard
            title={"Skillofin Backend"}
            description={
              "Collaborative backend API for the Skillofin educational platform. Built with Node.js, Express, and MongoDB. Features include user management, course APIs, and data validation."
            }
            className={styles.projectCard}
            techStack={["Node.js", "Express", "MongoDB", "Collaboration"]}
            githubUrl="https://github.com/skillofinit/skillofin-backend"
          />
          <CustomCard
            title={"Angular CRM"}
            description={
              "A modern CRM application built with Angular 19 and Tailwind CSS. Features include customer management, sales tracking, dashboard analytics, and responsive design."
            }
            className={styles.projectCard}
            techStack={["Angular", "TypeScript", "Tailwind CSS", "CRM"]}
            githubUrl="https://github.com/shivkr1357/AngularCRM"
          />
        </Stack>
      </Stack>

      {/* Call to Action */}
      <Stack
        spacing={3}
        sx={{
          padding: { xs: 2, md: 4 },
          marginTop: 4,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: themeStyles.text.primary,
            marginBottom: 1,
          }}
        >
          Ready to Build Something Amazing?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: themeStyles.text.secondary,
            // maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Let&apos;s collaborate on your next project. I&apos;m available for
          freelance work, full-time positions, and exciting opportunities.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#3B82F6",
              color: "white",
              borderRadius: "25px",
              textTransform: "none",
              fontWeight: 600,
              padding: "12px 30px",
              "&:hover": {
                backgroundColor: "#2563EB",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
              },
            }}
            href="https://wa.me/+917903665379"
            target="_blank"
          >
            Get In Touch
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: themeStyles.borderColor,
              color: themeStyles.text.primary,
              borderRadius: "25px",
              textTransform: "none",
              fontWeight: 600,
              padding: "12px 30px",
              "&:hover": {
                borderColor: themeStyles.text.primary,
                color: themeStyles.text.primary,
                transform: "translateY(-2px)",
              },
            }}
            href="https://github.com/shivkr1357"
            target="_blank"
          >
            View GitHub
          </Button>
        </Stack>
      </Stack>

      {/* Skills Section */}
      <Stack spacing={3} sx={{ padding: { xs: 2, md: 4 }, width: "100%" }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ marginBottom: 2 }}
        >
          <CodeIcon sx={{ color: "#3B82F6", fontSize: "32px" }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: themeStyles.text.primary,
            }}
          >
            Technical Skills
          </Typography>
        </Stack>

        <Typography
          variant="body1"
          sx={{
            color: themeStyles.text.secondary,
            marginBottom: 3,
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Proficient in modern web technologies with expertise in both frontend
          and backend development, database management, and cloud deployment.
        </Typography>

        <Stack
          marginTop={2}
          direction={"row"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          <WhatIKnow />
        </Stack>
      </Stack>
    </Fragment>
  );
}
