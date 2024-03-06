import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pink } from "@mui/material/colors";

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
               src={"/background-header.jpg"}
               alt='Personal pic'
               width={100}
               height={100}
               style={{ borderRadius: "50%", border: "2px solid white" }}
            />
            <Typography>Shiv Shankar Prasad</Typography>
         </Stack>
         <Stack sx={{ marginRight: "30px" }}>
            <Button
               startIcon={
                  <FontAwesomeIcon
                     color='#d62976'
                     width={20}
                     height={20}
                     icon={faInstagram}
                  />
               }
               sx={{ backgroundColor: pink["200"] }}
               variant='contained'
            >
               Follow me on Instagram
            </Button>
         </Stack>
      </Stack>
   );
};

export default MainTopHeader;
