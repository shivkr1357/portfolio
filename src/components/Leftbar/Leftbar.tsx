"use client";
import { Stack, Box } from "@mui/material";
import React from "react";
import LeftbarButtons from "@/components/LeftbarButtons/LeftbarButtons";
import { useTheme } from "@/contexts/ThemeContext";
import { getThemeStyles } from "@/utils/themeUtils";

const Leftbar = () => {
  try {
    const { theme } = useTheme();
    const themeStyles = getThemeStyles(theme);

    return (
      <Stack
        sx={{
          width: { xs: "0px", sm: "22%", md: "16%" },
          height: "100%",
          maxHeight: "85vh",
          backgroundColor: themeStyles.appBar.backgroundColor,
          display: { xs: "none", sm: "none", md: "flex" },
          borderRadius: "15px",
          position: "fixed",
          top: "90px",
          border: `1px solid ${
            theme === "light"
              ? themeStyles.borderColor
              : "rgba(59, 130, 246, 0.2)"
          }`,
          backdropFilter: "blur(15px)",
          boxShadow: themeStyles.appBar.boxShadow,
          transition: "all 0.3s ease",
          "&:hover": {
            border: `1px solid ${
              theme === "light"
                ? themeStyles.borderHover
                : "rgba(59, 130, 246, 0.3)"
            }`,
            boxShadow: themeStyles.shadowHover,
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
  } catch (error) {
    console.warn("Error in Leftbar component:", error);
    return (
      <Stack
        sx={{
          width: { xs: "0px", sm: "22%", md: "16%" },
          height: "100%",
          maxHeight: "85vh",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          display: { xs: "none", sm: "none", md: "flex" },
          borderRadius: "15px",
          position: "fixed",
          top: "90px",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Box sx={{ padding: "20px 0", height: "100%", overflowY: "auto" }}>
          <LeftbarButtons />
        </Box>
      </Stack>
    );
  }
};

export default Leftbar;
