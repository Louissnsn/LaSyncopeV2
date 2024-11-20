"use client";
import styles from "@/styles/Descriptif.module.css";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
export default function Descriptif({
  image,
  altText,
  title,
  descriptif,
  filePath,
}) {
  console.log("filePath from parent =>", filePath);
  return (
    <div className={styles.parent}>
      <div className={styles.shapeContainer}>
        <div className={styles.shape}></div>
      </div>
      <div className={styles.photoContainer}>
        <Image src={image} alt={altText} fill />
      </div>
      <div className={styles.texteContainer}>
        <h2 className={styles.titre}>{title}</h2>
        <p className={styles.text}>{descriptif}</p>
        <DownloadButton filePath={filePath} />
      </div>
    </div>
  );
}
