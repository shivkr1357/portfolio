import Topbar from "@/components/Topbar/Topbar";
import styles from "./page.module.css";
import Leftbar from "@/components/Leftbar/Leftbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Topbar />
      <Leftbar />
    </main>
  );
}
