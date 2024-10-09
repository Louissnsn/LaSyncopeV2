import styles from "@/app/styles/Presse.module.css";
import Image from "next/image";
export default function Presse() {
  return (
    <div className={styles.parent}>
      <div className={styles.presse}>
        <p className={styles.titre}>ON PARLE DE NOUS</p>
      </div>
      <div className={styles.photoContainer}>
        <Image src="" alt="" />
      </div>
    </div>
  );
}
