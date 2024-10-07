import styles from "@/app/styles/Direction.module.css";
import Mathilde from "@/app/components/Mathilde";
import Pauline from "@/app/components/Pauline";
export default function Direction() {
  return (
    <div className={styles.container}>
      <Mathilde />
      <Pauline />
    </div>
  );
}
