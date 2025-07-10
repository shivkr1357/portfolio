"use client";
import { Box, Stack, Typography, Chip, Divider } from "@mui/material";
import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faStackOverflow,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { LEFTBAR_ITEMS, LEFTBAR_SOCIAL_ITEMS } from "@/utils/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftbarButtons = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "Home":
        return <HomeOutlinedIcon sx={{ color: "gray", fontSize: "20px" }} />;
      case "Trending":
        return <WhatshotRoundedIcon sx={{ color: "gray", fontSize: "20px" }} />;
      case "Snippets":
        return <CodeRoundedIcon sx={{ color: "gray", fontSize: "20px" }} />;
      case "Videos":
        return <VideocamIcon sx={{ color: "gray", fontSize: "20px" }} />;
      default:
        return null;
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Github":
        return (
          <FontAwesomeIcon
            icon={faGithub}
            style={{ width: "20px", height: "20px" }}
          />
        );
      case "Instagram":
        return (
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ width: "20px", height: "20px", color: "#d62976" }}
          />
        );
      case "StackOverflow":
        return (
          <FontAwesomeIcon
            icon={faStackOverflow}
            style={{ width: "20px", height: "20px", color: "#F47F24" }}
          />
        );
      case "Youtube":
        return (
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ width: "20px", height: "20px", color: "rgb(255,61,61)" }}
          />
        );
      case "Facebook":
        return (
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ width: "20px", height: "20px", color: "#316FF6" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Stack spacing={1} sx={{ padding: "0 15px" }}>
      {/* Navigation Items */}
      <Stack spacing={1}>
        <Typography
          variant="caption"
          sx={{
            color: "gray",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "10px",
            paddingLeft: "10px",
          }}
        >
          Navigation
        </Typography>

        {LEFTBAR_ITEMS.map((item, index) => {
          const isActive = pathname === item.link;
          const isHovered = hoveredItem === item.name;

          return (
            <Link
              key={item.name + index}
              href={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 15px",
                  borderRadius: "12px",
                  backgroundColor: isActive
                    ? "rgba(239, 204, 0, 0.1)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(239, 204, 0, 0.3)"
                    : "1px solid transparent",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: isActive
                      ? "rgba(239, 204, 0, 0.15)"
                      : "rgba(255, 255, 255, 0.05)",
                    transform: "translateX(5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: isActive
                      ? "#EFCC00"
                      : isHovered
                      ? "#EFCC00"
                      : "gray",
                    transition: "all 0.3s ease",
                  }}
                >
                  {getIcon(item.name)}
                </Box>
                <Typography
                  sx={{
                    color: isActive
                      ? "#EFCC00"
                      : isHovered
                      ? "#EFCC00"
                      : "gray",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 500,
                    marginLeft: "12px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.name}
                </Typography>
                {isActive && (
                  <Box
                    sx={{
                      width: "4px",
                      height: "20px",
                      backgroundColor: "#EFCC00",
                      borderRadius: "2px",
                      marginLeft: "auto",
                      animation: "pulse 2s infinite",
                      "@keyframes pulse": {
                        "0%, 100%": { opacity: 1 },
                        "50%": { opacity: 0.5 },
                      },
                    }}
                  />
                )}
              </Box>
            </Link>
          );
        })}
      </Stack>

      <Divider
        sx={{ margin: "20px 0", borderColor: "rgba(255,255,255,0.1)" }}
      />

      {/* Social Links */}
      <Stack spacing={1}>
        <Typography
          variant="caption"
          sx={{
            color: "gray",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "10px",
            paddingLeft: "10px",
          }}
        >
          Socials
        </Typography>

        {LEFTBAR_SOCIAL_ITEMS.map((item, index) => {
          const isHovered = hoveredItem === item.name;

          return (
            <Link
              key={item.name + index}
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Box
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 15px",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    transform: "translateX(5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    opacity: isHovered ? 1 : 0.8,
                    transition: "all 0.3s ease",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {getSocialIcon(item.name)}
                </Box>
                <Typography
                  sx={{
                    color: isHovered ? "#EFCC00" : "gray",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginLeft: "12px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Link>
          );
        })}
      </Stack>

      {/* Status Indicator */}
      <Box
        sx={{
          marginTop: "auto",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <Chip
          label="Available for work"
          size="small"
          sx={{
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            color: "#4CAF50",
            border: "1px solid rgba(76, 175, 80, 0.3)",
            fontSize: "11px",
            fontWeight: 500,
          }}
        />
      </Box>
    </Stack>
  );
};

export default LeftbarButtons;
