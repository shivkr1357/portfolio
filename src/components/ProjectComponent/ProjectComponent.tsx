import { Avatar, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectComponent = ({ item }: any) => {
  return (
    <Link href={item.link} style={{ textDecoration: "none", color: "#ddd" }}>
      <Stack
        sx={{
          backgroundColor: "#333",
          padding: 2,
          margin: 1,
          cursor: "pointer",
        }}
      >
        <Stack direction={"row"}>
          <Image
            src="/background.jpeg"
            width={50}
            height={50}
            alt="Image tag"
          />
          <Stack sx={{ paddingLeft: 2 }}>
            <Typography sx={{ fontSize: 16 }}>{item.name}</Typography>
            <Typography sx={{ fontSize: 12 }}>{item.description}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  );
};

export default ProjectComponent;
