import styles from "@/styles/Distribution.module.css";
import Image from "next/image";
import logo from "../../public/logo/logo BLANC.png";

export default function Distribution() {
  return (
    <div className={styles.parent}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          alt="logo de la Syncope"
          sizes="(max-width: 768px) 80vw, 400px"
          height={500}
          width={300}
        />
      </div>
      <div className={styles.titreContainer}>
        <p className={styles.titre}>DISTRIBUTION</p>
      </div>
      <div className={styles.texteContainer}></div>
    </div>
  );
}
