"use client";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Code as CodeIcon,
} from "@mui/icons-material";

const CustomCard = ({
  title,
  description,
  className,
  techStack,
  githubUrl,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to get relevant image based on project title and tech stack
  const getProjectImage = (title: string, techStack: string[]) => {
    const titleLower = title.toLowerCase();
    const techStackLower = techStack?.map((tech) => tech.toLowerCase()) || [];

    // Check for specific project types
    if (
      titleLower.includes("angular") ||
      titleLower.includes("crm") ||
      titleLower.includes("business")
    ) {
      return "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // Professional business
    } else if (
      titleLower.includes("rust") ||
      titleLower.includes("video") ||
      titleLower.includes("streaming")
    ) {
      return "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // Modern tech
    } else if (
      titleLower.includes("skillofin") ||
      titleLower.includes("education") ||
      titleLower.includes("learning")
    ) {
      return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // Education
    } else if (
      titleLower.includes("backend") ||
      titleLower.includes("api") ||
      titleLower.includes("server")
    ) {
      return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // Server/backend
    } else if (
      titleLower.includes("portfolio") ||
      titleLower.includes("personal")
    ) {
      return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // Personal project
    } else if (
      titleLower.includes("react") ||
      titleLower.includes("frontend") ||
      techStackLower.includes("react")
    ) {
      return "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // React/Frontend
    } else if (
      titleLower.includes("node") ||
      titleLower.includes("express") ||
      techStackLower.includes("node.js")
    ) {
      return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // Node.js/Backend
    } else if (
      titleLower.includes("next") ||
      techStackLower.includes("next.js")
    ) {
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // Next.js
    } else if (
      titleLower.includes("mobile") ||
      titleLower.includes("app") ||
      techStackLower.includes("react native")
    ) {
      return "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // Mobile app
    } else if (
      titleLower.includes("ai") ||
      titleLower.includes("ml") ||
      titleLower.includes("machine learning")
    ) {
      return "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // AI/ML
    } else if (
      titleLower.includes("ecommerce") ||
      titleLower.includes("shop") ||
      titleLower.includes("store")
    ) {
      return "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // E-commerce
    } else {
      return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"; // Default coding
    }
  };

  return (
    <Card
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        width: { xs: "90%", sm: "45%", md: "20%" },
        marginTop: "20px",
        borderRadius: "20px",
        backgroundColor: "rgb(27,26,33)",
        border: "1px solid rgba(255,255,255,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
          border: "1px solid rgba(239,204,0,0.3)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(239,204,0,0.1), transparent)",
          transition: "left 0.5s",
          zIndex: 1,
        },
        "&:hover::before": {
          left: "100%",
        },
      }}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="140"
            image={getProjectImage(title, techStack || [])}
            alt={title}
            sx={{
              transition: "all 0.3s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              objectFit: "cover",
            }}
            onError={(e) => {
              // Fallback to a reliable default image if the main image fails to load
              const target = e.target as HTMLImageElement;
              target.src =
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80";
            }}
          />
          {/* Subtle overlay for better text readability */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
              pointerEvents: "none",
            }}
          />
        </Box>
        <CardContent sx={{ padding: 3, position: "relative", zIndex: 2 }}>
          <Stack spacing={2}>
            {/* Header */}
            <Box>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "white",
                  lineHeight: 1.3,
                  marginBottom: 1,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="gray"
                sx={{
                  lineHeight: 1.6,
                  fontSize: "14px",
                }}
              >
                {description}
              </Typography>
            </Box>

            {/* Tech Stack Chips */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ flexWrap: "wrap", gap: 1 }}
            >
              {techStack ? (
                techStack.map((tech: string, index: number) => (
                  <Chip
                    key={index}
                    label={tech}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(97, 218, 251, 0.2)",
                      color: "#61DAFB",
                      border: "1px solid rgba(97, 218, 251, 0.3)",
                      fontSize: "10px",
                      fontWeight: 500,
                    }}
                  />
                ))
              ) : (
                <>
                  <Chip
                    label="React"
                    size="small"
                    sx={{
                      backgroundColor: "rgba(97, 218, 251, 0.2)",
                      color: "#61DAFB",
                      border: "1px solid rgba(97, 218, 251, 0.3)",
                      fontSize: "10px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    label="Node.js"
                    size="small"
                    sx={{
                      backgroundColor: "rgba(76, 175, 80, 0.2)",
                      color: "#4CAF50",
                      border: "1px solid rgba(76, 175, 80, 0.3)",
                      fontSize: "10px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    label="MUI"
                    size="small"
                    sx={{
                      backgroundColor: "rgba(25, 118, 210, 0.2)",
                      color: "#1976D2",
                      border: "1px solid rgba(25, 118, 210, 0.3)",
                      fontSize: "10px",
                      fontWeight: 500,
                    }}
                  />
                </>
              )}
            </Stack>

            {/* Action Buttons */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Chip
                icon={<CodeIcon />}
                label="View Details"
                size="small"
                sx={{
                  backgroundColor: "rgba(239, 204, 0, 0.2)",
                  color: "#EFCC00",
                  border: "1px solid rgba(239, 204, 0, 0.3)",
                  fontSize: "11px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(239, 204, 0, 0.3)",
                    transform: "translateY(-1px)",
                  },
                }}
              />
              <Stack direction="row" spacing={1}>
                {githubUrl && (
                  <IconButton
                    size="small"
                    sx={{
                      color: "gray",
                      "&:hover": { color: "#EFCC00" },
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => window.open(githubUrl, "_blank")}
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                )}
                <IconButton
                  size="small"
                  sx={{
                    color: "gray",
                    "&:hover": { color: "#EFCC00" },
                    transition: "all 0.3s ease",
                  }}
                >
                  <LaunchIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
