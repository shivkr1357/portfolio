import Topbar from "@/components/Topbar/Topbar";
import styles from "./page.module.css";
import Leftbar from "@/components/Leftbar/Leftbar";
import MainTopHeader from "@/components/MainTopHeader/MainTopHeader";
import { Stack, Typography } from "@mui/material";
import CustomCard from "@/components/CustomCard/CustomCard";

export default function Home() {
   return (
      <main className={styles.main}>
         <Topbar />
         <Stack direction={"row"}>
            <Leftbar />
            <Stack
               direction={"column"}
               sx={{ width: { xs: "100%", sm: "100%", md: "100%" } }}
            >
               <MainTopHeader />
               <Typography marginTop={5} marginLeft={2}>
                  Projects
               </Typography>
               <Stack gap={2} marginTop={2} marginLeft={5} direction={"row"}>
                  <CustomCard
                     title={"Quora Clone"}
                     description={
                        "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
                     }
                  />
                  <CustomCard
                     title={"Quora Clone"}
                     description={
                        "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
                     }
                  />
                  <CustomCard
                     title={"Quora Clone"}
                     description={
                        "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
                     }
                  />
                  <CustomCard
                     title={"Quora Clone"}
                     description={
                        "Made Quora clone using React js, MUI and bacend on Nodejs ,Express js"
                     }
                  />
               </Stack>
            </Stack>
         </Stack>
      </main>
   );
}
