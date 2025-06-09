import styles from "./page.module.css";
import Presentation from "./components/CquoiLaSyncope";
import Collaborateurices from "./components/Collaborateurices";
import Accueil from "./components/Accueil";

export default function Home() {
  return (
    <div className={styles.page}>
      <Accueil />
      <Presentation />
      <Collaborateurices />
    </div>
  );
}
