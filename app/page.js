import styles from "./page.module.css";
import Cquoi from "./components/CquoiLaSyncope";
import Collaborateurices from "./components/Collaborateurices";
import Accueil from "./components/Accueil";

export default function Home() {
  return (
    <div className={styles.page}>
      <Accueil />
      <Cquoi />
      <Collaborateurices />
    </div>
  );
}
