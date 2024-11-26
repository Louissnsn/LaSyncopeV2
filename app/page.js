import styles from "./page.module.css";
import Cquoi from "./components/CquoiLaSyncope";

export default function Home() {
  return (
    <div className={styles.page}>
      <Cquoi />
    </div>
  );
}
