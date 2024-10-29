"use client";
import styles from "@/app/styles/Descriptif.module.css";
import Image from "next/image";

export default function Descriptif({ image, altText, title, descriptif }) {
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
      </div>
    </div>
  );
}
