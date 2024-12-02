import styles from "@/styles/Cover.module.css";
import Image from "next/image";

export default function Cover({ src, altText, title, customPosition }) {
  return (
    <div className={styles.container}>
      <Image
        src={src}
        alt={altText}
        fill
        style={{
          objectFit: "cover",
          objectPosition: customPosition || "center",
        }}
      />
      <div className={styles.titreContainer}>
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
