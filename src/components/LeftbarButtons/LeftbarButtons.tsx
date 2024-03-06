import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebook,
   faGithub,
   faInstagram,
   faStackOverflow,
   faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const LeftbarButtons = () => {
   const items = ["Home", "Trending", "Snippets", "Videos"];
   const itemSocial = [
      "Github",
      "Instagram",
      "StackOverflow",
      "Youtube",
      "Facebook",
   ];

   return (
      <Stack>
         {items.map((item, index) => {
            return (
               <Stack
                  sx={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     flexDirection: "column",
                     width: "100%",
                     height: "100%",
                     padding: "10px",
                     paddingTop: "20px",
                  }}
                  key={item + " " + index}
               >
                  <Box
                     sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        alignContent: "start",
                        flexDirection: "row",
                        padding: "5px 10px",
                        width: "90%",
                     }}
                  >
                     {item === "Home" ? (
                        <HomeOutlinedIcon sx={{ color: "gray" }} />
                     ) : item === "Trending" ? (
                        <WhatshotRoundedIcon sx={{ color: "gray" }} />
                     ) : item === "Snippets" ? (
                        <CodeRoundedIcon sx={{ color: "gray" }} />
                     ) : item === "Videos" ? (
                        <VideocamIcon sx={{ color: "gray" }} />
                     ) : null}

                     <Typography
                        sx={{
                           color: "gray",
                           fontSize: "18px",
                           marginLeft: "10px ",
                        }}
                     >
                        {item}
                     </Typography>
                  </Box>
               </Stack>
            );
         })}
         <Typography sx={{ marginLeft: "20px", color: "dimgray" }}>
            Socials
         </Typography>

         {itemSocial.map((item, index) => {
            return (
               <Stack
                  sx={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     flexDirection: "column",
                     width: "100%",
                     height: "100%",
                     padding: "15px",
                  }}
                  key={item + " " + index}
               >
                  <Box
                     sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        alignContent: "start",
                        flexDirection: "row",
                        padding: "5px 10px",
                        width: "90%",
                     }}
                  >
                     {item === "Github" ? (
                        <FontAwesomeIcon
                           icon={faGithub}
                           width={25}
                           height={25}
                        />
                     ) : item === "Instagram" ? (
                        <FontAwesomeIcon
                           icon={faInstagram}
                           width={25}
                           height={25}
                           color='#d62976'
                        />
                     ) : item === "StackOverflow" ? (
                        <FontAwesomeIcon
                           icon={faStackOverflow}
                           width={25}
                           height={25}
                           color='#F47F24'
                        />
                     ) : item === "Youtube" ? (
                        <FontAwesomeIcon
                           icon={faYoutube}
                           width={25}
                           height={25}
                           color='rgb(255,61,61)'
                        />
                     ) : item === "Facebook" ? (
                        <FontAwesomeIcon
                           icon={faFacebook}
                           width={25}
                           height={25}
                           color='#316FF6'
                        />
                     ) : null}

                     <Typography
                        sx={{
                           color: "gray",
                           fontSize: "18px",
                           marginLeft: "10px ",
                        }}
                     >
                        {item}
                     </Typography>
                  </Box>
               </Stack>
            );
         })}
      </Stack>
   );
};

export default LeftbarButtons;
