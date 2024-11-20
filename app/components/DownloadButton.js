import styles from "@/styles/DownloadButton.module.css";

const DownloadButton = ({ filePath }) => {
  const handleOpenPDF = () => {
    if (!filePath) {
      console.error("Le chemin du fichier PDF n'est pas défini.");
      return;
    }
    window.open(filePath, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={handleOpenPDF}
        aria-label="Ouvrir le dossier artistique en PDF"
      >
        Ouvrir le dossier artistique
      </button>
    </div>
  );
};

export default DownloadButton;
