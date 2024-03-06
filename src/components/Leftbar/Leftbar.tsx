import { Stack } from "@mui/material";
import React from "react";

import styles from "@/app/page.module.css";
import LeftbarButtons from "../LeftbarButtons/LeftbarButtons";

const Leftbar = () => {
   return (
      <Stack
         sx={{
            width: { xs: "0px", sm: "25%", md: "20%" },
            height: "100%",
            minHeight: "90vh",
            backgroundColor: "rgb(28,27,34)",
            margin: "10px",
            display: { xs: "none", sm: "flex", md: "flex" },
            borderRadius: "10px",
         }}
      >
         <LeftbarButtons />
      </Stack>
   );
};

export default Leftbar;
