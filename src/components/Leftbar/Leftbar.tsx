import { Stack, Box } from "@mui/material";
import React from "react";
import LeftbarButtons from "../LeftbarButtons/LeftbarButtons";

const Leftbar = () => {
  return (
    <Stack
      sx={{
        width: { xs: "0px", sm: "22%", md: "16%" },
        height: "100%",
        maxHeight: "80vh",
        backgroundColor: "rgb(28,27,34)",
        // margin: "10px 10px 10px 5px",
        display: { xs: "none", sm: "none", md: "flex" },
        borderRadius: "15px",
        position: "fixed",
        top: "80px",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        "&:hover": {
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
        },
      }}
    >
      <Box
        sx={{
          padding: "20px 0",
          height: "100%",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(255,255,255,0.2)",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(255,255,255,0.3)",
          },
        }}
      >
        <LeftbarButtons />
      </Box>
    </Stack>
  );
};

export default Leftbar;
