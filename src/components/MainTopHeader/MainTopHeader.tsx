"use client";
import { Box, Button, Stack, Typography, Chip, Avatar } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pink } from "@mui/material/colors";
import Link from "next/link";
import {
  LocationOn as LocationIcon,
  Work as WorkIcon,
  School as SchoolIcon,
} from "@mui/icons-material";

const MainTopHeader = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Stack
      direction={"row"}
      sx={{
        height: "180px",
        width: { xs: "100%", sm: "100%", md: "98%" },
        marginTop: "10px",
        background:
          "linear-gradient(135deg, rgba(28,27,34,0.9) 0%, rgba(28,27,34,0.8) 100%)",
        backgroundImage: 'url("/background-blurred1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(239,204,0,0.1) 0%, rgba(255,215,0,0.05) 100%)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Section - Profile Info */}
      <Stack
        direction={"row"}
        sx={{ marginLeft: "30px", zIndex: 1 }}
        alignItems={"center"}
        spacing={3}
      >
        <Box sx={{ position: "relative" }}>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              border: "3px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              background: "linear-gradient(45deg, #EFCC00, #FFD700)",
              fontWeight: "bold",
              fontSize: "32px",
              "&:hover": {
                transform: "scale(1.05)",
                border: "3px solid rgba(239,204,0,0.5)",
              },
            }}
          >
            SP
          </Avatar>
          <Chip
            label="Available"
            size="small"
            sx={{
              position: "absolute",
              bottom: -5,
              right: -5,
              backgroundColor: "rgba(76, 175, 80, 0.9)",
              color: "white",
              fontSize: "10px",
              fontWeight: 600,
              border: "2px solid white",
            }}
          />
        </Box>

        <Stack spacing={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "white",
              fontSize: { xs: "24px", md: "28px" },
              background: "linear-gradient(45deg, #EFCC00, #FFD700)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Shiv Shankar Prasad
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "gray",
              fontWeight: 500,
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            Full Stack Developer
          </Typography>

          <Stack direction="row" spacing={2} sx={{ marginTop: 1 }}>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <LocationIcon sx={{ fontSize: "16px", color: "gray" }} />
              <Typography variant="caption" sx={{ color: "gray" }}>
                India
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={0.5}>
              <WorkIcon sx={{ fontSize: "16px", color: "gray" }} />
              <Typography variant="caption" sx={{ color: "gray" }}>
                Freelancer
              </Typography>
            </Stack>
          </Stack>

          <Link
            href={"https://www.instagram.com/shivshankarkumar246/"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                color: "#d62976",
                fontSize: "14px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#FF69B4",
                  transform: "translateX(5px)",
                },
              }}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "14px" }}
              />
              @shivshankarkumar246
            </Typography>
          </Link>
        </Stack>
      </Stack>

      {/* Right Section - Action Buttons */}
      <Stack
        direction="column"
        spacing={2}
        sx={{
          marginRight: "30px",
          zIndex: 1,
          display: { xs: "none", sm: "none", md: "flex" },
        }}
      >
        <Button
          startIcon={<FontAwesomeIcon icon={faInstagram} />}
          sx={{
            backgroundColor: "rgba(214, 41, 118, 0.9)",
            color: "white",
            borderRadius: "25px",
            textTransform: "none",
            fontWeight: 600,
            padding: "10px 20px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#d62976",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(214, 41, 118, 0.3)",
            },
          }}
          variant="contained"
          href="https://www.instagram.com/shivshankarkumar246/"
          target="_blank"
        >
          Follow on Instagram
        </Button>

        <Stack direction="row" spacing={1}>
          <Chip
            label="React"
            size="small"
            sx={{
              backgroundColor: "rgba(97, 218, 251, 0.2)",
              color: "#61DAFB",
              border: "1px solid rgba(97, 218, 251, 0.3)",
              fontSize: "11px",
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
              fontSize: "11px",
              fontWeight: 500,
            }}
          />
          <Chip
            label="Next.js"
            size="small"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontSize: "11px",
              fontWeight: 500,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainTopHeader;
