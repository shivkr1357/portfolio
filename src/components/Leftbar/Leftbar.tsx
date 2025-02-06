import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import LeftbarButtons from "../LeftbarButtons/LeftbarButtons";

const Leftbar = () => {
   return (
      <Stack
         sx={{
            width: { xs: "0px", sm: "22%", md: "16%" },
            height: "100%",
            maxHeight: "80vh",
            backgroundColor: "rgba(28,27,34,0.95)",
            backdropFilter: "blur(8px)",
            margin: "10px",
            display: { xs: "none", sm: "none", md: "flex" },
            borderRadius: "16px",
            position: "fixed",
            top: "80px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
            transition: "all 0.3s ease",
            '&:hover': {
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            }
         }}
      >
         <Box sx={{ p: 2 }}>
           <Typography 
             variant="subtitle2" 
             sx={{ 
               color: '#90caf9',
               fontWeight: 600,
               mb: 2,
               pl: 2 
             }}
           >
             NAVIGATION
           </Typography>
           <LeftbarButtons />
         </Box>
      </Stack>
   );
};

export default Leftbar;
