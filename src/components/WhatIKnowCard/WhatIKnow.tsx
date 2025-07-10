"use client";
import {
  BACKEND_ITEMS,
  DATABASE_ITEMS,
  DEVOPS_ITEMS,
  FRONETND_ITEMS,
  PROJECT_FOR_RIGHTLINK,
} from "@/utils/constant";
import {
  Stack,
  Typography,
  Box,
  Chip,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ProjectComponent from "../ProjectComponent/ProjectComponent";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Build as BuildIcon,
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";

const SkillCard = ({ title, items, icon, color }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        backgroundColor: "rgb(27,26,33)",
        borderRadius: "15px",
        border: "1px solid rgba(255,255,255,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.2)",
        },
      }}
    >
      <CardContent
        sx={{
          padding: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack spacing={2} sx={{ height: "100%" }}>
          {/* Header */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                backgroundColor: `${color}20`,
                borderRadius: "10px",
                padding: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "white",
                fontSize: "18px",
              }}
            >
              {title}
            </Typography>
          </Stack>

          {/* Skills Grid */}
          <Stack
            direction="row"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              flex: 1,
              alignContent: "flex-start",
            }}
          >
            {items.map((item: any, index: number) => (
              <Chip
                key={item.name + index}
                label={item.name}
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: item.color || "gray",
                  border: `1px solid ${item.color}30`,
                  fontSize: "11px",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: `${item.color}20`,
                    transform: "translateY(-1px)",
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

const WhatIKnow = () => {
  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      {/* Skills Grid */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          width: "100%",
        }}
      >
        <SkillCard
          title="Frontend Development"
          items={FRONETND_ITEMS}
          icon={<CodeIcon sx={{ color: "#61DAFB" }} />}
          color="#61DAFB"
        />
        <SkillCard
          title="Backend Development"
          items={BACKEND_ITEMS}
          icon={<StorageIcon sx={{ color: "#4CAF50" }} />}
          color="#4CAF50"
        />
        <SkillCard
          title="Database Management"
          items={DATABASE_ITEMS}
          icon={<CloudIcon sx={{ color: "#FFD700" }} />}
          color="#FFD700"
        />
        <SkillCard
          title="DevOps & Tools"
          items={DEVOPS_ITEMS}
          icon={<BuildIcon sx={{ color: "#FF6B6B" }} />}
          color="#FF6B6B"
        />
      </Stack>

      {/* Additional Projects Section */}
      <Stack spacing={3}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <GitHubIcon sx={{ color: "#EFCC00", fontSize: "28px" }} />
          More Projects
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 2,
            width: "100%",
          }}
        >
          {PROJECT_FOR_RIGHTLINK.map((item, key) => (
            <ProjectComponent item={item} key={key} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhatIKnow;
