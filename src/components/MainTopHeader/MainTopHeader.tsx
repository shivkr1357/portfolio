import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pink } from "@mui/material/colors";
import Link from "next/link";

const MainTopHeader = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        height: "200px",
        width: { xs: "100%", sm: "100%", md: "98%" },
        marginTop: "10px",
        background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Stack
        direction={"row"}
        sx={{ marginLeft: "40px" }}
        alignItems={"center"}
        gap={5}
      >
        <Box
          sx={{
            position: 'relative',
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '3px solid #2196f3',
            padding: '3px',
            background: '#fff',
          }}
        >
          <Image
            src={"/professional-headshot.jpg"}
            alt="Shiv Shankar Prasad - Full Stack Developer"
            fill
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Stack spacing={1}>
          <Typography variant="h4" sx={{ 
            color: '#fff',
            fontWeight: 600,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Shiv Shankar Prasad
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#90caf9',
            fontWeight: 500 
          }}>
            Full Stack Developer
          </Typography>
          <Link
            href={"https://www.instagram.com/shivshankarkumar246/"}
            style={{ 
              color: "#90caf9",
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <FontAwesomeIcon icon={faInstagram} />
            @shivshankarkumar246
          </Link>
        </Stack>
      </Stack>
      <Stack sx={{ marginRight: "40px" }} spacing={2}>
        <Button
          startIcon={<FontAwesomeIcon icon={faInstagram} />}
          sx={{
            backgroundColor: '#d62976',
            color: 'white',
            padding: '12px 24px',
            '&:hover': {
              backgroundColor: '#c21858',
            },
            display: { xs: "none", sm: "none", md: "flex" },
          }}
          variant="contained"
        >
          Follow on Instagram
        </Button>
      </Stack>
    </Stack>
  );
};

export default MainTopHeader;
