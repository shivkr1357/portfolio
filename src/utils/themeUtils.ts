export const getThemeColors = (theme: "light" | "dark") => {
  if (theme === "light") {
    return {
      // Background colors
      primaryBg: "rgba(255, 255, 255, 0.95)",
      secondaryBg: "rgba(248, 250, 252, 0.8)",
      cardBg: "rgba(255, 255, 255, 0.9)",
      inputBg: "rgba(248, 250, 252, 0.8)",

      // Text colors
      primaryText: "#1e293b",
      secondaryText: "#64748b",
      mutedText: "#94a3b8",

      // Border colors
      borderColor: "rgba(148, 163, 184, 0.2)",
      borderHover: "rgba(148, 163, 184, 0.4)",

      // Accent colors (blue)
      primary: "#3B82F6",
      primaryHover: "#2563EB",
      primaryLight: "#60A5FA",

      // Status colors
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",

      // Shadow
      shadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      shadowHover: "0 8px 25px rgba(0, 0, 0, 0.15)",
    };
  } else {
    return {
      // Background colors
      primaryBg: "rgba(15, 23, 42, 0.95)",
      secondaryBg: "rgba(30, 41, 59, 0.8)",
      cardBg: "rgba(30, 41, 59, 0.8)",
      inputBg: "rgba(30, 41, 59, 0.8)",

      // Text colors
      primaryText: "#ffffff",
      secondaryText: "#cbd5e1",
      mutedText: "#94a3b8",

      // Border colors
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderHover: "rgba(255, 255, 255, 0.2)",

      // Accent colors (blue)
      primary: "#3B82F6",
      primaryHover: "#2563EB",
      primaryLight: "#60A5FA",

      // Status colors
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",

      // Shadow
      shadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
      shadowHover: "0 8px 25px rgba(0, 0, 0, 0.5)",
    };
  }
};

export const getThemeStyles = (theme: "light" | "dark") => {
  try {
    const colors = getThemeColors(theme);

    return {
      // AppBar styles
      appBar: {
        backgroundColor: colors.primaryBg,
        backdropFilter: "blur(15px)",
        borderBottom: `1px solid ${
          theme === "light" ? colors.borderColor : "rgba(59, 130, 246, 0.2)"
        }`,
        boxShadow: colors.shadow,
      },

      // Card styles
      card: {
        backgroundColor: colors.cardBg,
        border: `1px solid ${colors.borderColor}`,
        boxShadow: colors.shadow,
        "&:hover": {
          border: `1px solid ${colors.borderHover}`,
          boxShadow: colors.shadowHover,
        },
      },

      // Input styles
      input: {
        backgroundColor: colors.inputBg,
        border: `1px solid ${colors.borderColor}`,
        color: colors.primaryText,
        "&:hover": {
          border: `1px solid ${colors.borderHover}`,
        },
        "&.Mui-focused": {
          border: `1px solid ${colors.primary}`,
        },
      },

      // Text styles
      text: {
        primary: colors.primaryText,
        secondary: colors.secondaryText,
        muted: colors.mutedText,
      },

      // Border styles
      borderColor: colors.borderColor,
      borderHover: colors.borderHover,

      // Shadow styles
      shadow: colors.shadow,
      shadowHover: colors.shadowHover,

      // Button styles
      button: {
        primary: {
          backgroundColor: colors.primary,
          color: "#ffffff",
          "&:hover": {
            backgroundColor: colors.primaryHover,
          },
        },
        secondary: {
          backgroundColor: "transparent",
          color: colors.primaryText,
          border: `1px solid ${colors.borderColor}`,
          "&:hover": {
            border: `1px solid ${colors.primary}`,
            color: colors.primary,
          },
        },
      },
    };
  } catch (error) {
    console.warn("Error in getThemeStyles:", error);
    // Return default dark theme styles as fallback
    return {
      appBar: {
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
      },
      card: {
        backgroundColor: "rgba(30, 41, 59, 0.8)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
      },
      text: {
        primary: "#ffffff",
        secondary: "#cbd5e1",
        muted: "#94a3b8",
      },
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderHover: "rgba(255, 255, 255, 0.2)",
      shadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
      shadowHover: "0 8px 25px rgba(0, 0, 0, 0.5)",
    };
  }
};
