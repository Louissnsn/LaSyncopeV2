import styles from "@/styles/Presse.module.css";
import Image from "next/image";
import leviathan from "../../public/images/Spectacles/Poissons/leviathan.jpg";
export default function Presse() {
  return (
    <div className={styles.parent}>
      <div className={styles.presse}>
        <p className={styles.titre}>ON PARLE DE NOUS</p>
      </div>
      {/* <div className={styles.photoContainer}>
        <Image
          src={leviathan}
          alt="Photographie d'un spectacle"
          fill
          style={{ borderRadius: "25px" }}
        />
      </div> */}
    </div>
  );
}
