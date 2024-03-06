import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const LeftbarButtons = () => {
  const items = ["Home", "Trending", "Snippets", "Videos"];
  const itemSocial = [
    "Github",
    "Instagram",
    "StackOverflow",
    "Youtube",
    "Facebook",
  ];

  return (
    <Stack>
      {items.map((item, index) => {
        return (
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              padding: "20px",
              //   border: "1px solid red",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                alignContent: "start",
                flexDirection: "row",
                padding: "5px 10px",
                width: "90%",
              }}
            >
              {item === "Home" ? (
                <HomeOutlinedIcon sx={{ color: "gray" }} />
              ) : item === "Trending" ? (
                <WhatshotRoundedIcon sx={{ color: "gray" }} />
              ) : item === "Snippets" ? (
                <CodeRoundedIcon sx={{ color: "gray" }} />
              ) : item === "Videos" ? (
                <VideocamIcon sx={{ color: "gray" }} />
              ) : null}

              <Typography
                sx={{ color: "gray", fontSize: "18px", marginLeft: "10px " }}
              >
                {item}
              </Typography>
            </Box>
          </Stack>
        );
      })}
      <Typography sx={{ marginLeft: "20px", color: "dimgray" }}>
        Socials
      </Typography>

      {itemSocial.map((item, index) => {
        return (
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              padding: "20px",
              //   border: "1px solid red",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                alignContent: "start",
                flexDirection: "row",
                padding: "5px 10px",
                width: "90%",
              }}
            >
              {item === "Home" ? (
                <HomeOutlinedIcon sx={{ color: "gray" }} />
              ) : item === "Instagram" ? (
                <InstagramIcon sx={{ color: "#405DE6" }} />
              ) : item === "Snippets" ? (
                <CodeRoundedIcon sx={{ color: "gray" }} />
              ) : item === "Videos" ? (
                <VideocamIcon sx={{ color: "gray" }} />
              ) : null}

              <Typography
                sx={{ color: "gray", fontSize: "18px", marginLeft: "10px " }}
              >
                {item}
              </Typography>
            </Box>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default LeftbarButtons;
