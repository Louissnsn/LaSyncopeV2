import styles from "@/styles/Accueil.module.css";
import Image from "next/image";
import choeur from "../../public/images/Covers/choeur-des-hommes-4.webp";
export default function Accueil() {
  //transformer texte en photo
  return (
    <div className={styles.parent}>
      <div className={styles.photoContainer}>
        <Image
          src={choeur}
          alt="Photo du spectacle des Poissons"
          fill
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.shape1}> </div>
      <div className={styles.titreContainer}>
        <h1 className={styles.titre}>LA SYNCOPE</h1>
      </div>
      <div className={styles.texteContainer}>
        <div className={styles.shapeInText}></div>
      </div>
    </div>
  );
}
