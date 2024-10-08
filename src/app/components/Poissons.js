import styles from "@/app/styles/Poissons.module.css";
import Image from "next/image";
import boue from "@/app/public/images/Covers/boue.jpg";
export default function Poissons() {
  return (
    <div className={styles.container}>
      <div className={styles.photoContainer}>
        <Image
          src={boue}
          alt="Photographie du spectacle"
          fill
          style={{
            objectFit: "cover",
            minWidth: "400px",
          }}
        />
        <h1 className={styles.titre}>
          TOUT CE QU'IL Y A
          <span className={styles.titreSuite}>DANS LE VENTRE</span>
          <span className={styles.titreSuite}>DES POISSONS</span>
        </h1>
      </div>
    </div>
  );
}
