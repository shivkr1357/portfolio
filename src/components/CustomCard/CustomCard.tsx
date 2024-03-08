import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CustomCard = ({ title, description }: any) => {
  return (
    <Card
      sx={{
        width: "300px",
        marginTop: "20px",
        borderRadius: "20px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/background.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
