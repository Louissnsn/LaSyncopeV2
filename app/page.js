import styles from "./page.module.css";
import Cquoi from "./components/CquoiLaSyncope";
import Collaborateurices from "./components/Collaborateurices";
import Accueil from "./components/Accueil";
// import ScrollDown from "./components/ScrollDown";

export default function Home() {
  return (
    <div className={styles.page}>
      <Accueil />
      <Cquoi />
      {/* <ScrollDown /> */}
      <Collaborateurices />
    </div>
  );
}
