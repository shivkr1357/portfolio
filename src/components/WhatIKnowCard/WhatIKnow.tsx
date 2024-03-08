"use client";
import { BACKEND_ITEMS, FRONETND_ITEMS } from "@/utils/constant";
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
  fontSize: "14px",
  borderRadius: "5px",
}));

const CustomStack = styled(Stack, { name: "Stack", slot: "root" })(
  ({ theme }) => ({
    backgroundColor: "rgb(27,26,33)",
    width: "280px",
    height: "280px",
    marginLeft: "30px",
    padding: "20px",
    borderRadius: "10px",
    gap: 2,
    margin: "10px",
  })
);

const WhatIKnow = () => {
  return (
    <Stack gap={2}>
      <Typography marginLeft={2} marginTop={5}>
        What I know
      </Typography>
      <Stack
        direction={"row"}
        // gap={2}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomStack>
          <Typography>Frontend</Typography>
          <Stack sx={{ display: "inline-block", marginTop: "20px" }}>
            {FRONETND_ITEMS.map((item, index) => {
              return (
                <CustomTypography
                  style={{ border: `1px solid ${item.color} ` }}
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
                >
                  {item.name}
                </CustomTypography>
              );
            })}
          </Stack>
        </CustomStack>
      </Stack>
    </Stack>
  );
};

export default WhatIKnow;
