import { Avatar, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectComponent = ({ item }: any) => {
  return (
    <Link href={item.link} style={{ textDecoration: "none" }}>
      <Stack
        sx={{
          backgroundColor: "rgba(51,51,51,0.8)",
          padding: 3,
          margin: 1,
          cursor: "pointer",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            backgroundColor: "rgba(51,51,51,0.9)",
          }
        }}
      >
        <Stack direction={"row"} spacing={3}>
          <Box
            sx={{
              position: 'relative',
              width: 80,
              height: 80,
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          >
            <Image
              src={item.image || "/project-placeholder.jpg"}
              fill
              style={{ objectFit: "cover" }}
              alt={item.name}
            />
          </Box>
          <Stack spacing={1} sx={{ flex: 1 }}>
            <Typography 
              sx={{ 
                fontSize: 18,
                fontWeight: 600,
                color: '#fff'
              }}
            >
              {item.name}
            </Typography>
            <Typography 
              sx={{ 
                fontSize: 14,
                color: '#aaa',
                lineHeight: 1.6
              }}
            >
              {item.description}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {item.technologies?.map((tech: string) => (
                <Typography
                  key={tech}
                  sx={{
                    fontSize: 12,
                    color: '#90caf9',
                    backgroundColor: 'rgba(33,150,243,0.1)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {tech}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  );
};

export default ProjectComponent;
