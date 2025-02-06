"use client";
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
import { styled } from "@mui/material/styles";

const MenuButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 16px',
  borderRadius: '8px',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(144, 202, 249, 0.08)',
    transform: 'translateX(4px)',
  }
}));

const MenuIcon = styled(Box)(({ theme }) => ({
  color: '#90caf9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
}));

const MenuText = styled(Typography)({
  fontSize: '14px',
  fontWeight: 500,
  color: '#fff',
  marginLeft: '12px',
});

const SectionTitle = styled(Typography)({
  color: '#666',
  fontSize: '12px',
  fontWeight: 600,
  textTransform: 'uppercase',
  padding: '16px 16px 8px',
  letterSpacing: '0.5px',
});

const LeftbarButtons = () => {
   return (
      <Stack spacing={1}>
         {LEFTBAR_ITEMS.map((item, index) => (
           <Link href={item.link} key={item.name} style={{ textDecoration: 'none' }}>
             <MenuButton>
               <MenuIcon>
                 {item.name === "Home" ? (
                   <HomeOutlinedIcon />
                 ) : item.name === "Trending" ? (
                   <WhatshotRoundedIcon />
                 ) : item.name === "Snippets" ? (
                   <CodeRoundedIcon />
                 ) : item.name === "Videos" ? (
                   <VideocamIcon />
                 ) : null}
               </MenuIcon>
               <MenuText>{item.name}</MenuText>
             </MenuButton>
           </Link>
         ))}

         <SectionTitle>Socials</SectionTitle>

         {LEFTBAR_SOCIAL_ITEMS.map((item, index) => (
           <Link href={item.link} key={item.name} style={{ textDecoration: 'none' }}>
             <MenuButton>
               <MenuIcon>
                 <FontAwesomeIcon 
                   icon={
                     item.name === "Github" ? faGithub :
                     item.name === "Instagram" ? faInstagram :
                     item.name === "StackOverflow" ? faStackOverflow :
                     item.name === "Youtube" ? faYoutube :
                     faFacebook
                   }
                   color={
                     item.name === "Github" ? '#fff' :
                     item.name === "Instagram" ? '#d62976' :
                     item.name === "StackOverflow" ? '#F47F24' :
                     item.name === "Youtube" ? '#ff3d3d' :
                     '#316FF6'
                   }
                 />
               </MenuIcon>
               <MenuText>{item.name}</MenuText>
             </MenuButton>
           </Link>
         ))}
      </Stack>
   );
};

export default LeftbarButtons;
