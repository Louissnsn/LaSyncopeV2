import styles from "@/styles/Cover.module.css";
import Image from "next/image";

export default function Cover({ image, altText, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.photoContainer}>
        <Image
          src={image}
          alt={altText}
          fill
          style={{
            objectFit: "cover",
            minWidth: "400px",
          }}
        />
        <h1 className={styles.titre}>
          {title.map((line, index) => (
            <span key={index} className={styles.titreSuite}>
              {line}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
