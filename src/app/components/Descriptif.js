"use client";
import styles from "@/app/styles/Descriptif.module.css";
import Image from "next/image";

export default function Descriptif({ image, altText, descriptif }) {
  return (
    <div className={styles.parent}>
      <div className={styles.shapeContainer}>
        <div className={styles.shape}></div>
      </div>
      <div className={styles.photoContainer}>
        <Image src={image} alt={altText} fill />
      </div>
      <div className={styles.texteContainer}>
        <p>{descriptif}</p>
      </div>
    </div>
  );
}
