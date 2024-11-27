import styles from "./page.module.css";
import Cquoi from "./components/CquoiLaSyncope";
import Collaborateurices from "./components/Collaborateurices";
import Accueil from "./components/Accueil";
import Compagnie from "./components/Compagnie";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Compagnie />
      <Accueil /> */}
      <Cquoi />
      <Collaborateurices />
    </div>
  );
}
