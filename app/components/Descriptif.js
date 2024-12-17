import styles from "@/styles/Descriptif.module.css";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import { motion } from "framer-motion";
export default function Descriptif({ image, title, descriptif, filePath }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.parent}
    >
      {" "}
      {/* <div className={styles.shapeContainer}>
        <div className={styles.shape}></div>
      </div> */}
      <div className={styles.zigZag1}></div>
      <div className={styles.shape1}></div>
      <div className={styles.firstPart}>
        <h2 className={styles.titre}>{title}</h2>
        <div className={styles.descContainer}>
          <p className={styles.texte}>{descriptif}</p>
        </div>
        <DownloadButton filePath={filePath} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 3 },
        }}
        className={styles.photoContainer}
      >
        <Image
          src={image}
          alt="Photo du spectacle"
          fill
          priority
          placeholder="blur"
          style={{
            backgroundColor: "red",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
      </motion.div>
      <div className={styles.shape2}></div>
      <div className={styles.zigZag2}></div>
    </motion.div>
  );
}
