import styles from "@/styles/DownloadButton.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const DownloadButton = ({ filePath }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} className={styles.buttonContainer}>
      <Link
        href={filePath}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Télécharger le dossier artistique"
        className={styles.button}
      >
        TÉLÉCHARGER LE DOSSIER ARTISTIQUE
      </Link>
    </motion.div>
  );
};

export default DownloadButton;
