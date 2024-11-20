import styles from "@/styles/DownloadButton.module.css";
import Link from "next/link";

const DownloadButton = ({ filePath }) => {
  return (
    <div className={styles.buttonContainer}>
      <Link
        href={filePath}
        locale={false}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Télécharger le dossier artistique"
        className={styles.button}
      >
        Télécharger le dossier artistique
      </Link>
    </div>
  );
};

export default DownloadButton;
