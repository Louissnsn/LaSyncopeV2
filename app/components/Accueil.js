import styles from "@/styles/Accueil.module.css";
import Image from "next/image";
import choeur from "../../public/images/Covers/choeur-des-hommes-4.webp";
import welcome from "../../public/images/Covers/welcome.webp";
export default function Accueil() {
  return (
    <div className={styles.parent}>
      <div className={styles.photoContainer}>
        <Image
          src={welcome}
          alt="Photo du spectacle des Poissons"
          fill
          placeholder="blur"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.shape1}> </div>
      <div className={styles.titreContainer}>
        <h1 className={styles.titre}>LA SYNCOPE</h1>
      </div>
      <div className={styles.photoContainerRight}>
        <Image
          src={choeur}
          alt="Photo du spectacle Quand le loup n'y est plus"
          fill
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
