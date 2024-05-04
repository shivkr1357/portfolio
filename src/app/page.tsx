import { Stack, Typography } from "@mui/material";
import CustomCard from "@/components/CustomCard/CustomCard";
import WhatIKnow from "@/components/WhatIKnowCard/WhatIKnow";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Typography marginTop={5} marginLeft={2}>
        Projects
      </Typography>
      <Stack
        gap={3}
        marginTop={2}
        direction={"row"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <CustomCard
          title={"Quora Clone"}
          description={
            "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
          }
        />
        <CustomCard
          title={"Tutorials WebApp"}
          description={"Made Web app using Next js, MUI and  hosted on Vercel"}
        />
        <CustomCard
          title={"Ecommerce WebApp"}
          description={
            "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
          }
        />
        <CustomCard
          title={"Social Mobile App"}
          description={
            "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
          }
        />
      </Stack>
      <Stack
        marginTop={2}
        direction={"row"}
        sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}
      >
        <WhatIKnow />
      </Stack>
    </Fragment>
  );
}
