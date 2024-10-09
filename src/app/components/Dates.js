import styles from "@/app/styles/Dates.module.css";
export default function Dates() {
  return (
    <div className={styles.parent}>
      <div className={styles.titreContainer}>
        <p className={styles.titre}>DATES</p>
      </div>
      {/* ajouter séparateur vertical div blanche centrée */}
      <div className={styles.futures}>
        <p className={styles.texte}>À VENIR</p>
      </div>
      <div className={styles.passées}>
        <p className={styles.texte}>PASSÉES</p>
      </div>
    </div>
  );
}
