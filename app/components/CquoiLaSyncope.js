import styles from "@/styles/Cquoi.module.css";
export default function Cquoi() {
  return (
    <div className={styles.parent}>
      <div className={styles.leftContainer}>
        <div className={styles.textleft}></div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.textRight}>
          <p className={styles.text}></p>
        </div>
      </div>
    </div>
  );
}
