import styles from "@/styles/Distribution.module.css";
import Image from "next/image";
import logo from "@/public/logo/logo BLANC.png";

export default function Distribution() {
  return (
    <div className={styles.parent}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo de la Syncope" height={600} width={400} />
      </div>
      <div className={styles.titreContainer}>
        <p className={styles.titre}>DISTRIBUTION</p>
      </div>
      <div className={styles.texteContainer}></div>
    </div>
  );
}
