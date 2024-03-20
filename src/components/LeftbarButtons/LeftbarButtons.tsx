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
import { LEFTBAR_ITEMS, LEFTBAR_SOCIAL_ITEMS } from "@/utils/constant";
import Link from "next/link";

const LeftbarButtons = () => {
   return (
      <Stack>
         {LEFTBAR_ITEMS.map((item, index) => {
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
                     paddingTop: "10px",
                  }}
                  key={item.name + " " + index}
               >
                  <Box
                     sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        alignContent: "start",
                        flexDirection: "row",
                        padding: "5px",
                        width: "90%",
                     }}
                  >
                     <Link
                        href={item.link}
                        style={{
                           display: "flex",
                           flexDirection: "row",
                           justifyContent: "center",
                           alignItems: "center",
                           textDecoration: "none",
                        }}
                     >
                        {item.name === "Home" ? (
                           <HomeOutlinedIcon sx={{ color: "gray" }} />
                        ) : item.name === "Trending" ? (
                           <WhatshotRoundedIcon sx={{ color: "gray" }} />
                        ) : item.name === "Snippets" ? (
                           <CodeRoundedIcon sx={{ color: "gray" }} />
                        ) : item.name === "Videos" ? (
                           <VideocamIcon sx={{ color: "gray" }} />
                        ) : null}

                        <Typography
                           sx={{
                              color: "gray",
                              fontSize: "14px",
                              marginLeft: "10px ",
                           }}
                        >
                           {item.name}
                        </Typography>
                     </Link>
                  </Box>
               </Stack>
            );
         })}
         <Typography sx={{ marginLeft: "20px", color: "dimgray" }}>
            Socials
         </Typography>

         {LEFTBAR_SOCIAL_ITEMS.map((item, index) => {
            return (
               <Stack
                  sx={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     flexDirection: "column",
                     width: "100%",
                     height: "100%",
                     padding: "8px",
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
                     <Link
                        href={item.link}
                        style={{
                           display: "flex",
                           flexDirection: "row",
                           justifyContent: "center",
                           alignItems: "center",
                           textDecoration: "none",
                        }}
                     >
                        {item.name === "Github" ? (
                           <FontAwesomeIcon
                              icon={faGithub}
                              width={25}
                              height={25}
                           />
                        ) : item.name === "Instagram" ? (
                           <FontAwesomeIcon
                              icon={faInstagram}
                              width={25}
                              height={25}
                              color='#d62976'
                           />
                        ) : item.name === "StackOverflow" ? (
                           <FontAwesomeIcon
                              icon={faStackOverflow}
                              width={25}
                              height={25}
                              color='#F47F24'
                           />
                        ) : item.name === "Youtube" ? (
                           <FontAwesomeIcon
                              icon={faYoutube}
                              width={25}
                              height={25}
                              color='rgb(255,61,61)'
                           />
                        ) : item.name === "Facebook" ? (
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
                              fontSize: "14px",
                              marginLeft: "10px ",
                           }}
                        >
                           {item.name}
                        </Typography>
                     </Link>
                  </Box>
               </Stack>
            );
         })}
      </Stack>
   );
};

export default LeftbarButtons;
