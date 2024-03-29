import Topbar from "@/components/Topbar/Topbar";
import styles from "./page.module.css";
import Leftbar from "@/components/Leftbar/Leftbar";
import MainTopHeader from "@/components/MainTopHeader/MainTopHeader";
import { Stack, Typography } from "@mui/material";
import CustomCard from "@/components/CustomCard/CustomCard";
import WhatIKnow from "@/components/WhatIKnowCard/WhatIKnow";

export default function Home() {
   return (
      <main className={styles.main}>
         <Topbar />
         <Stack direction={"row"} marginTop={"80px"}>
            <Leftbar />
            <Stack
               direction={"column"}
               sx={{
                  width: { xs: "98%", sm: "100%", md: "90%" },
                  marginLeft: { xs: "0px", sm: "0px", md: "18%" },
                  display: "flex",
                  justifyContent: "flex-end",
               }}
            >
               <MainTopHeader />
               <Typography marginTop={5} marginLeft={2}>
                  Projects
               </Typography>
               <Stack
                  gap={3}
                  marginTop={2}
                  direction={"row"}
                  sx={{
                     display: "flex",
                     flexWrap: "wrap",
                     width: "100%",
                     justifyContent: "center",
                  }}
               >
                  <CustomCard
                     title={"Quora Clone"}
                     description={
                        "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
                     }
                  />
                  <CustomCard
                     title={"Tutorials WebApp"}
                     description={
                        "Made Web app using Next js, MUI and  hosted on Vercel"
                     }
                  />
                  <CustomCard
                     title={"Ecommerce WebApp"}
                     description={
                        "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
                     }
                  />
                  <CustomCard
                     title={"Social Mobile App"}
                     description={
                        "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
                     }
                  />
               </Stack>
               <Stack
                  marginTop={2}
                  direction={"row"}
                  sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}
               >
                  <WhatIKnow />
               </Stack>
            </Stack>
         </Stack>
      </main>
   );
}
