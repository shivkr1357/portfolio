import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar/Topbar";
import { Stack } from "@mui/material";
import Leftbar from "@/components/Leftbar/Leftbar";
import MainTopHeader from "@/components/MainTopHeader/MainTopHeader";
import styles from "./page.module.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Shiv Shankar Prasad",
  description:
    "My personal portfolio in next js showing what stacks i know and what kind of projects i have done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <Topbar />
          <Stack direction={"row"} marginTop={"80px"}>
            <Leftbar />
            <Stack
              direction={"column"}
              sx={{
                width: { xs: "98%", sm: "100%", md: "82%" },
                marginLeft: { xs: "0px", sm: "0px", md: "18%" },
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <MainTopHeader />
              {children}
            </Stack>
          </Stack>
        </main>
      </body>
    </html>
  );
}
