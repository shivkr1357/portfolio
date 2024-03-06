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
} from "@mui/material";

const CustomButton = styled("button")({
   color: "white",
   backgroundColor: "green",
   padding: 15,
   borderRadius: 4,
   border: "none",
   "&:hover": {
      backgroundColor: "#41a317",
      cursor: "pointer",
   },
});

const Topbar = () => {
   return (
      <AppBar position='sticky' sx={{ backgroundColor: "dimgrey" }}>
         <Container maxWidth='xl'>
            <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     width: "100%",
                  }}
               >
                  <Typography>ItsIndianGuy</Typography>
                  <Box
                     sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <Tooltip title='Contact Me'>
                        <CustomButton
                           sx={{ backgroundColor: "green", color: "white" }}
                        >
                           Contact Me
                        </CustomButton>
                     </Tooltip>
                  </Box>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Topbar;
