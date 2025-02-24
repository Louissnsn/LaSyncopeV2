import styles from "@/styles/Compagnie.module.css";
import Image from "next/image";
import welcome from "../../public/images/images 16:9/poissons.jpg";
import logo from "../../public/logo/LogoBLANC.png";

export default function Compagnie() {
  return (
    <div className={styles.container}>
      <div className={styles.photosContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={welcome}
            alt="Page d'accueil"
            placeholder="blur"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={logo}
            placeholder="blur"
            alt="Logo de la compagnie"
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
}
