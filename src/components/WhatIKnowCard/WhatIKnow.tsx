"use client";
import {
  BACKEND_ITEMS,
  DATABASE_ITEMS,
  DEVOPS_ITEMS,
  FRONETND_ITEMS,
  PROJECT_FOR_RIGHTLINK,
} from "@/utils/constant";
import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import ProjectComponent from "../ProjectComponent/ProjectComponent";

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
      width: "20%",
      height: "94%",
    },
  })
);

const WhatIKnow = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      justifyContent={"center"}
      gap={{ xs: 3, sm: 3, md: 0 }}
    >
      <Stack width={"90%"}>
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
      <Typography
        marginLeft={2}
        marginTop={5}
        display={{ xs: "flex", sm: "flex", md: "none" }}
      >
        More Projects
      </Typography>
      <Stack
        sx={{
          backgroundColor: "rgb(27,26,33)",
          padding: "20px",
          marginTop: { xs: 3, sm: 3, md: 0 },
          marginLeft: { xs: 1, sm: 1, md: 0 },
          width: { xs: "100%", sm: "90%", md: "54%" },
          height: { xs: "auto", sm: "100%", md: "100%" },
          display: "flex",
          marginRight: { xs: 0, sm: 0, md: 5 },
        }}
      >
        {PROJECT_FOR_RIGHTLINK.map((item, key) => {
          return <ProjectComponent item={item} key={key} />;
        })}
      </Stack>
    </Stack>
  );
};

export default WhatIKnow;
