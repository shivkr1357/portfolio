import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pink } from "@mui/material/colors";
import Link from "next/link";

const MainTopHeader = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        height: "150px",
        width: { xs: "100%", sm: "100%", md: "98%" },
        marginTop: "10px",
        backgroundImage: 'url("/background-blurred1.jpg")',
        backgroundSize: "cover",
        backdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Stack
        direction={"row"}
        sx={{ marginLeft: "30px" }}
        alignItems={"center"}
        gap={5}
      >
        <Image
          src={"/profile.jpg"}
          alt="Personal pic"
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            border: "2px solid white",
            objectFit: "contain",
          }}
        />
        <Stack>
          <Typography>Shiv Shankar Prasad</Typography>
          <Link
            href={"https://www.instagram.com/shivshankarkumar246/"}
            style={{ color: "#d62976" }}
          >
            @shivshankarkumar246
          </Link>
        </Stack>
      </Stack>
      <Stack sx={{ marginRight: "30px" }}>
        <Button
          startIcon={
            <FontAwesomeIcon
              color="#d62976"
              width={20}
              height={20}
              icon={faInstagram}
            />
          }
          sx={{
            backgroundColor: pink["200"],
            display: { xs: "none", sm: "none", md: "flex" },
          }}
          variant="contained"
        >
          Follow me on Instagram
        </Button>
      </Stack>
    </Stack>
  );
};

export default MainTopHeader;
