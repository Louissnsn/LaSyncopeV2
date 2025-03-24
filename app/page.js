// "use client";
import styles from "./page.module.css";
import Cquoi from "./components/CquoiLaSyncope";
import Collaborateurices from "./components/Collaborateurices";
import Accueil from "./components/Accueil";
import Compagnie from "./components/Compagnie";
// import Loader from "@/components/Loader";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Compagnie /> */}
      <Accueil />
      {/* <Loader /> */}
      <Cquoi />
      <Collaborateurices />
    </div>
  );
}
