// components/Compagnie.jsx

import styles from "@/app/styles/Compagnie.module.css";
import Image from "next/image";
import welcome from "@/app/public/images/images 16:9/poissons.jpg";
import logo from "@/app/public/logo/logo BLANC.png";

export default function Compagnie() {
  return (
    <div className={styles.container}>
      <div className={styles.photosContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={welcome}
            alt="Page d'accueil"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={logo}
            alt="Logo de la compagnie"
            width={250}
            height={400}
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
}
