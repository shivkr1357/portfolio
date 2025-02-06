import { Stack, Typography } from "@mui/material";
import CustomCard from "@/components/CustomCard/CustomCard";
import WhatIKnow from "@/components/WhatIKnowCard/WhatIKnow";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Typography 
        variant="h4" 
        marginTop={8} 
        marginBottom={4} 
        textAlign="center"
        fontWeight="bold"
        color="primary"
      >
        Featured Projects
      </Typography>
      <Stack
        gap={4}
        marginX={4}
        marginBottom={8}
        direction={"row"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <CustomCard
          title={"Quora Community Platform"}
          description={
            "A full-stack Q&A platform built with React.js and Material-UI for the frontend, powered by Node.js and Express.js backend. Features include user authentication, real-time updates, and responsive design."
          }
        />
        <CustomCard
          title={"Interactive Learning Platform"}
          description={
            "Modern educational web application developed using Next.js and Material-UI. Features server-side rendering, optimized performance, and seamless user experience. Deployed and hosted on Vercel."
          }
        />
        <CustomCard
          title={"E-commerce Solution"}
          description={
            "Feature-rich e-commerce platform with secure payment integration, product management, and order tracking. Built using React.js, Material-UI, with Node.js and Express.js backend."
          }
        />
        <CustomCard
          title={"Social Networking Mobile App"}
          description={
            "Cross-platform mobile application enabling social connections, content sharing, and real-time messaging. Developed using React Native with a robust Node.js backend."
          }
        />
      </Stack>
      <Stack
        marginX={4}
        marginBottom={8}
        direction={"row"}
        sx={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center" }}
      >
        <WhatIKnow />
      </Stack>
    </Fragment>
  );
}
