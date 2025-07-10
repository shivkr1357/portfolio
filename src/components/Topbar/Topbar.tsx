"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Tooltip,
  styled,
  Typography,
  Button,
  Avatar,
  Stack,
  IconButton,
  Badge,
} from "@mui/material";
import {
  WhatsApp as WhatsAppIcon,
  Work as WorkIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import Link from "next/link";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgb(28,27,34)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  textTransform: "none",
  fontWeight: 600,
  padding: "8px 20px",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    transition: "left 0.5s",
  },
  "&:hover::before": {
    left: "100%",
  },
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
  },
}));

const ContactButton = styled(StyledButton)({
  backgroundColor: "#25D366",
  color: "white",
  "&:hover": {
    backgroundColor: "#128C7E",
  },
});

const HireButton = styled(StyledButton)({
  backgroundColor: "#EFCC00",
  color: "black",
  "&:hover": {
    backgroundColor: "#FFD700",
  },
});

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledAppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "rgba(28,27,34,0.95)" : "rgb(28,27,34)",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Logo/Brand Section */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                background: "linear-gradient(45deg, #EFCC00, #FFD700)",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              SP
            </Avatar>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: "linear-gradient(45deg, #EFCC00, #FFD700)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                Shiv Shankar Prasad
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "gray",
                  fontSize: { xs: "10px", md: "12px" },
                }}
              >
                Full Stack Developer
              </Typography>
            </Box>
          </Stack>

          {/* Action Buttons */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <Tooltip title="Contact via WhatsApp" arrow>
              <Link href="https://wa.me/+917903665379" target="_blank">
                <ContactButton startIcon={<WhatsAppIcon />} size="small">
                  Contact Me
                </ContactButton>
              </Link>
            </Tooltip>

            <Tooltip title="Hire me on Upwork" arrow>
              <Link
                href="https://www.upwork.com/freelancers/~016baf39b538bd48cd"
                target="_blank"
              >
                <HireButton startIcon={<WorkIcon />} size="small">
                  Hire Me
                </HireButton>
              </Link>
            </Tooltip>

            <Tooltip title="Email me" arrow>
              <Link href="mailto:shivkr1357@gmail.com">
                <IconButton
                  sx={{
                    color: "gray",
                    "&:hover": { color: "#EFCC00" },
                    transition: "all 0.3s ease",
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="GitHub Profile" arrow>
              <Link href="https://github.com/shivkr1357" target="_blank">
                <IconButton
                  sx={{
                    color: "gray",
                    "&:hover": { color: "#EFCC00" },
                    transition: "all 0.3s ease",
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Link>
            </Tooltip>
          </Stack>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Tooltip title="Contact via WhatsApp" arrow>
              <Link href="https://wa.me/+917903665379" target="_blank">
                <ContactButton startIcon={<WhatsAppIcon />} size="small">
                  Contact
                </ContactButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Topbar;
