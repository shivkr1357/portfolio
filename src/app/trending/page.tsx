"use client";
import { useState } from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  IconButton,
  LinearProgress,
  Avatar,
  Grid,
  Divider,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  Code as CodeIcon,
  Star as StarIcon,
  Visibility as VisibilityIcon,
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Whatshot as WhatshotIcon,
} from "@mui/icons-material";
import styles from "./page.module.css";
import { useTheme } from "@/contexts/ThemeContext";
import { getThemeStyles } from "@/utils/themeUtils";

// Sample trending data
const TRENDING_TOPICS = [
  {
    id: 1,
    title: "Next.js 14 App Router",
    description:
      "The latest features and improvements in Next.js 14 with the new App Router",
    category: "Frontend",
    trend: "rising",
    growth: 85,
    stars: 45000,
    views: 125000,
    color: "#000000",
  },
  {
    id: 2,
    title: "TypeScript 5.0 Features",
    description:
      "New TypeScript features including satisfies operator and improved inference",
    category: "TypeScript",
    trend: "hot",
    growth: 92,
    stars: 38000,
    views: 98000,
    color: "#3178C6",
  },
  {
    id: 3,
    title: "React Server Components",
    description:
      "Understanding React Server Components and their impact on performance",
    category: "React",
    trend: "rising",
    growth: 78,
    stars: 52000,
    views: 150000,
    color: "#61DAFB",
  },
  {
    id: 4,
    title: "AI in Web Development",
    description:
      "How AI is transforming web development with tools like GitHub Copilot",
    category: "AI/ML",
    trend: "exploding",
    growth: 95,
    stars: 65000,
    views: 200000,
    color: "#FF6B6B",
  },
  {
    id: 5,
    title: "WebAssembly (WASM)",
    description: "High-performance web applications with WebAssembly",
    category: "Performance",
    trend: "rising",
    growth: 68,
    stars: 28000,
    views: 75000,
    color: "#654FF0",
  },
  {
    id: 6,
    title: "Micro Frontends",
    description:
      "Building scalable frontend architectures with micro frontends",
    category: "Architecture",
    trend: "hot",
    growth: 73,
    stars: 32000,
    views: 89000,
    color: "#4CAF50",
  },
];

const TRENDING_TECHNOLOGIES = [
  { name: "React", growth: 15, color: "#61DAFB" },
  { name: "Next.js", growth: 25, color: "#000000" },
  { name: "TypeScript", growth: 20, color: "#3178C6" },
  { name: "Tailwind CSS", growth: 30, color: "#06B6D4" },
  { name: "Node.js", growth: 12, color: "#4CAF50" },
  { name: "Python", growth: 18, color: "#3776AB" },
  { name: "Rust", growth: 35, color: "#CE422B" },
  { name: "Go", growth: 22, color: "#00ADD8" },
];

const TRENDING_INSIGHTS = [
  {
    id: 1,
    title: "The Rise of Full-Stack Development",
    description: "How full-stack developers are becoming more valuable in 2024",
    readTime: "5 min read",
    category: "Career",
  },
  {
    id: 2,
    title: "Performance Optimization Techniques",
    description:
      "Advanced techniques for optimizing web application performance",
    readTime: "8 min read",
    category: "Performance",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    description:
      "Predictions and trends for web development in 2024 and beyond",
    readTime: "6 min read",
    category: "Trends",
  },
];

export default function Trending() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { theme } = useTheme();
  const themeStyles = getThemeStyles(theme);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "exploding":
        return <WhatshotIcon sx={{ color: "#FF6B6B" }} />;
      case "hot":
        return <TrendingUpIcon sx={{ color: "#3B82F6" }} />;
      case "rising":
        return <TrendingUpIcon sx={{ color: "#4CAF50" }} />;
      default:
        return <TrendingUpIcon sx={{ color: "gray" }} />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "exploding":
        return "#FF6B6B";
      case "hot":
        return "#3B82F6";
      case "rising":
        return "#4CAF50";
      default:
        return "gray";
    }
  };

  return (
    <Stack spacing={4} sx={{ padding: { xs: 2, md: 4 } }}>
      {/* Header Section */}
      <Stack spacing={2}>
        {/* <Typography
          variant="h3"
          className={styles.gradientText}
          sx={{
            fontWeight: 700,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TrendingUpIcon sx={{ fontSize: "40px" }} />
          Trending Topics
        </Typography> */}
        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: "center", md: "left" },
            color: themeStyles.text.secondary,
          }}
        >
          Stay updated with the latest trends in web development, technologies,
          and industry insights
        </Typography>
      </Stack>

      {/* Trending Topics Grid */}
      <Stack marginTop={2}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: themeStyles.text.primary,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <WhatshotIcon sx={{ color: "#FF6B6B" }} />
          Hot Topics
        </Typography>

        <Grid container spacing={2} marginTop={2}>
          {TRENDING_TOPICS.map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic.id}>
              <Card
                className={styles.trendingCard}
                sx={{
                  backgroundColor: themeStyles.card.backgroundColor,
                  borderRadius: "15px",
                  border: `1px solid ${themeStyles.borderColor}`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: themeStyles.shadowHover,
                    border: `1px solid ${themeStyles.borderHover}`,
                  },
                }}
              >
                <CardContent sx={{ padding: 2 }}>
                  <Stack spacing={2}>
                    {/* Header */}
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                    >
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: themeStyles.text.primary,
                            marginBottom: 1,
                            lineHeight: 1.3,
                          }}
                        >
                          {topic.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            lineHeight: 1.5,
                            marginBottom: 2,
                            color: themeStyles.text.secondary,
                          }}
                        >
                          {topic.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          color: getTrendColor(topic.trend),
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        {getTrendIcon(topic.trend)}
                      </Box>
                    </Stack>

                    {/* Category and Growth */}
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Chip
                        label={topic.category}
                        size="small"
                        sx={{
                          backgroundColor:
                            theme === "light"
                              ? "rgba(0,0,0,0.1)"
                              : "rgba(255,255,255,0.1)",
                          color: themeStyles.text.secondary,
                          fontSize: "11px",
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: getTrendColor(topic.trend),
                          fontWeight: 600,
                        }}
                      >
                        +{topic.growth}%
                      </Typography>
                    </Stack>

                    {/* Stats */}
                    <Stack direction="row" spacing={2}>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <StarIcon
                          sx={{
                            fontSize: "14px",
                            color: themeStyles.text.secondary,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{ color: themeStyles.text.secondary }}
                        >
                          {topic.stars.toLocaleString()}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <VisibilityIcon
                          sx={{
                            fontSize: "14px",
                            color: themeStyles.text.secondary,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{ color: themeStyles.text.secondary }}
                        >
                          {topic.views.toLocaleString()}
                        </Typography>
                      </Stack>
                    </Stack>

                    {/* Growth Bar */}
                    <Box>
                      <LinearProgress
                        variant="determinate"
                        value={topic.growth}
                        sx={{
                          height: 4,
                          borderRadius: 2,
                          backgroundColor:
                            theme === "light"
                              ? "rgba(0,0,0,0.1)"
                              : "rgba(255,255,255,0.1)",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: getTrendColor(topic.trend),
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>

      {/* Technology Trends */}
      <Stack spacing={2}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: themeStyles.text.primary,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CodeIcon sx={{ color: "#3B82F6" }} />
          Technology Trends
        </Typography>

        <Grid container spacing={2}>
          {TRENDING_TECHNOLOGIES.map((tech, index) => (
            <Grid item xs={12} sm={6} md={3} key={tech.name}>
              <Card
                sx={{
                  backgroundColor: themeStyles.card.backgroundColor,
                  borderRadius: "12px",
                  border: `1px solid ${themeStyles.borderColor}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: themeStyles.shadowHover,
                  },
                }}
              >
                <CardContent sx={{ padding: 2 }}>
                  <Stack spacing={2}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: themeStyles.text.primary,
                          fontSize: "16px",
                        }}
                      >
                        {tech.name}
                      </Typography>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          backgroundColor: tech.color,
                        }}
                      />
                    </Stack>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: tech.color,
                      }}
                    >
                      +{tech.growth}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={tech.growth}
                      sx={{
                        height: 3,
                        borderRadius: 2,
                        backgroundColor:
                          theme === "light"
                            ? "rgba(0,0,0,0.1)"
                            : "rgba(255,255,255,0.1)",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: tech.color,
                        },
                      }}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>

      {/* Insights Section */}
      <Stack spacing={3}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: themeStyles.text.primary,
          }}
        >
          Latest Insights
        </Typography>

        <Stack spacing={2}>
          {TRENDING_INSIGHTS.map((insight) => (
            <Card
              key={insight.id}
              sx={{
                backgroundColor: themeStyles.card.backgroundColor,
                borderRadius: "12px",
                border: `1px solid ${themeStyles.borderColor}`,
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateX(5px)",
                  border: `1px solid ${themeStyles.borderHover}`,
                },
              }}
            >
              <CardContent sx={{ padding: 3 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: themeStyles.text.primary,
                        marginBottom: 1,
                      }}
                    >
                      {insight.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.5,
                        marginBottom: 2,
                        color: themeStyles.text.secondary,
                      }}
                    >
                      {insight.description}
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Chip
                        label={insight.category}
                        size="small"
                        sx={{
                          backgroundColor:
                            theme === "light"
                              ? "rgba(0,0,0,0.1)"
                              : "rgba(255,255,255,0.1)",
                          color: themeStyles.text.secondary,
                          fontSize: "11px",
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ color: themeStyles.text.secondary }}
                      >
                        {insight.readTime}
                      </Typography>
                    </Stack>
                  </Box>
                  <IconButton
                    sx={{
                      color: themeStyles.text.secondary,
                      "&:hover": { color: "#3B82F6" },
                    }}
                  >
                    <LaunchIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
