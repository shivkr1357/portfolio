"use client";
import {
   BACKEND_ITEMS,
   DATABASE_ITEMS,
   DEVOPS_ITEMS,
   FRONETND_ITEMS,
} from "@/utils/constant";
import { Stack, Typography, styled } from "@mui/material";
import React from "react";

const CustomTypography = styled(Typography, {
   name: "Typography",
   slot: "root",
})(({ theme }) => ({
   backgroundColor: "rgb(20,19,25)",
   display: "inline-block",
   justifyContent: "center",
   alignItems: "center",
   padding: "8px",
   margin: "5px",
   fontSize: "11px",
   fontWeight: 500,
   borderRadius: "5px",
   color: "gray",
}));

const CustomStack = styled(Stack, { name: "Stack", slot: "root" })(
   ({ theme }) => ({
      backgroundColor: "rgb(27,26,33)",
      padding: "10px",
      borderRadius: "10px",
      gap: 2,
      margin: "10px",
      [theme.breakpoints.up("xs")]: {
         width: "90%",
      },
      [theme.breakpoints.up("sm")]: {
         width: "45%",
         height: "50%",
      },
      [theme.breakpoints.up("md")]: {
         width: "14%",
         height: "94%",
      },
   })
);

const WhatIKnow = () => {
   return (
      <Stack direction={"row"} justifyContent={"space-around"}>
         <Stack>
            <Typography marginLeft={2} marginTop={5}>
               What I know
            </Typography>
            <Stack
               direction={"row"}
               style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  marginLeft: "20px",
               }}
            >
               <CustomStack>
                  <Typography>Frontend</Typography>
                  <Stack sx={{ display: "inline-block", marginTop: "20px" }}>
                     {FRONETND_ITEMS.map((item, index) => {
                        return (
                           <CustomTypography
                              style={{ border: `1px solid ${item.color} ` }}
                              key={item.name + item.color}
                           >
                              {item.name}
                           </CustomTypography>
                        );
                     })}
                  </Stack>
               </CustomStack>
               <CustomStack>
                  <Typography>Backend</Typography>
                  <Stack sx={{ display: "inline-block", marginTop: "20px" }}>
                     {BACKEND_ITEMS.map((item, index) => {
                        return (
                           <CustomTypography
                              style={{ border: `1px solid ${item.color} ` }}
                              key={item.name + item.color}
                           >
                              {item.name}
                           </CustomTypography>
                        );
                     })}
                  </Stack>
               </CustomStack>
               <CustomStack>
                  <Typography>Databases</Typography>
                  <Stack sx={{ display: "inline-block", marginTop: "20px" }}>
                     {DATABASE_ITEMS.map((item, index) => {
                        return (
                           <CustomTypography
                              style={{ border: `1px solid ${item.color} ` }}
                              key={item.name + item.color}
                           >
                              {item.name}
                           </CustomTypography>
                        );
                     })}
                  </Stack>
               </CustomStack>
               <CustomStack>
                  <Typography>DevOps</Typography>
                  <Stack sx={{ display: "inline-block", marginTop: "20px" }}>
                     {DEVOPS_ITEMS.map((item, index) => {
                        return (
                           <CustomTypography
                              style={{ border: `1px solid ${item.color} ` }}
                              key={item.name + item.color}
                           >
                              {item.name}
                           </CustomTypography>
                        );
                     })}
                  </Stack>
               </CustomStack>
            </Stack>
         </Stack>
         <Stack
            sx={{
               backgroundColor: "rgb(27,26,33)",
               padding: "10px",
               // gap: 2,
               width: { xs: "90%", sm: "45%", md: "24%" },
               height: { xs: "auto", sm: "100%", md: "100%" },
            }}
         ></Stack>
      </Stack>
   );
};

export default WhatIKnow;
