"use client";
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Tooltip,
  styled,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";

const CustomButton = styled(Button)(({ theme }) => ({
  padding: '10px 20px',
  borderRadius: '8px',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  }
}));

const HireButton = styled(CustomButton)({
  backgroundColor: '#2196f3',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1976d2',
  }
});

const ContactButton = styled(CustomButton)({
  backgroundColor: '#4caf50',
  color: 'white',
  '&:hover': {
    backgroundColor: '#388e3c',
  }
});

const Topbar = () => {
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        backgroundColor: "rgba(28,27,34,0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196f3, #64b5f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ItsIndianGuy
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href={"https://wa.me/+917903665379"} style={{ textDecoration: 'none' }}>
              <Tooltip title="Contact via WhatsApp">
                <ContactButton>
                  Contact Me
                </ContactButton>
              </Tooltip>
            </Link>
            
            <Link href={"https://www.upwork.com/freelancers/~016baf39b538bd48cd"} style={{ textDecoration: 'none' }}>
              <Tooltip title="View Upwork Profile">
                <HireButton>
                  Hire Me on Upwork
                </HireButton>
              </Tooltip>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Topbar;
