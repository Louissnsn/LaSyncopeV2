import styles from "./page.module.css";
import Cquoi from "./components/CquoiLaSyncope";
import Collaborateurices from "./components/Collaborateurices";

export default function Home() {
  return (
    <div className={styles.page}>
      <Cquoi />
      <Collaborateurices />
    </div>
  );
}
