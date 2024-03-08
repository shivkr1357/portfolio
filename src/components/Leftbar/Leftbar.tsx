import { Stack } from "@mui/material";
import React from "react";
import LeftbarButtons from "../LeftbarButtons/LeftbarButtons";

const Leftbar = () => {
   return (
      <Stack
         sx={{
            width: { xs: "0px", sm: "22%", md: "16%" },
            height: "100%",
            maxHeight: "80vh",
            backgroundColor: "rgb(28,27,34)",
            margin: "10px",
            display: { xs: "none", sm: "none", md: "flex" },
            borderRadius: "10px",
            position: "fixed",
            top: "80px",
         }}
      >
         <LeftbarButtons />
      </Stack>
   );
};

export default Leftbar;
