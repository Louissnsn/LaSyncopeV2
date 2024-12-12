import styles from "@/styles/Descriptif.module.css";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
export default function Descriptif({ image, title, descriptif, filePath }) {
  return (
    <div className={styles.parent}>
      {/* <div className={styles.shapeContainer}>
        <div className={styles.shape}></div>
      </div> */}
      <div className={styles.zigZag1}></div>

      <div className={styles.shape1}></div>
      <div className={styles.firstPart}>
        <h2 className={styles.titre}>{title}</h2>
        <div className={styles.descContainer}>{descriptif}</div>
        <DownloadButton filePath={filePath} />
      </div>
      <div className={styles.photoContainer}>
        <Image
          src={image}
          alt="Photo du spectacle"
          fill
          style={{
            borderRadius: "100px",
            objectFit: "contain",
          }}
        />
      </div>
      <div className={styles.shape2}></div>

      <div className={styles.zigZag2}></div>
    </div>
  );
}
