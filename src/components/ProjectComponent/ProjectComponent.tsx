"use client";
import {
  Avatar,
  Stack,
  Typography,
  Card,
  CardContent,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { useTheme } from "@/contexts/ThemeContext";
import { getThemeStyles } from "@/utils/themeUtils";

const ProjectComponent = ({ item }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const themeStyles = getThemeStyles(theme);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        backgroundColor: themeStyles.card.backgroundColor,
        borderRadius: "15px",
        border: `1px solid ${themeStyles.borderColor}`,
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
        minHeight: "140px",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: themeStyles.shadowHover,
          border: `1px solid ${themeStyles.borderHover}`,
        },
      }}
    >
      <Link href={item.link} target="_blank" style={{ textDecoration: "none" }}>
        <CardContent
          sx={{
            padding: 2.5,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack spacing={2} sx={{ height: "100%" }}>
            {/* Header with Icon and Title */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                sx={{
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderRadius: "10px",
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CodeIcon sx={{ color: "#3B82F6", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: themeStyles.text.primary,
                  fontSize: "16px",
                  lineHeight: 1.3,
                }}
              >
                {item.name}
              </Typography>
            </Stack>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.5,
                fontSize: "13px",
                color: themeStyles.text.secondary,
              }}
            >
              {item.description}
            </Typography>

            {/* Action Buttons */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ marginTop: "auto" }}
            >
              <Chip
                label="View Project"
                size="small"
                sx={{
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  color: "#3B82F6",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  fontSize: "11px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(59, 130, 246, 0.3)",
                    transform: "translateY(-1px)",
                  },
                }}
              />
              <Stack direction="row" spacing={1}>
                <IconButton
                  size="small"
                  sx={{
                    color: themeStyles.text.secondary,
                    "&:hover": { color: "#3B82F6" },
                    transition: "all 0.3s ease",
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: themeStyles.text.secondary,
                    "&:hover": { color: "#3B82F6" },
                    transition: "all 0.3s ease",
                  }}
                >
                  <LaunchIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProjectComponent;
