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
        <p className={styles.texteBio}>
          est une compagnie de théâtre née en 2019 et domiciliée en
          Île-de-France. <br />
        </p>
        <p className={styles.texteBio}>
          Elle s&apos;est fondée sur une étroite collaboration entre Mathilde
          Bellin et Pauline Legoëdec, deux comédiennes et artistes de théâtre
          ayant développé une affinité artistique commune et singulière lors de
          leurs différentes formations. <br />
        </p>
        <p className={styles.texteBio}>
          La Syncope affirme une grande confiance en l&apos;interprète et mène à
          bien des créations qui ont pour terrain de jeu des écritures
          contemporaines, pensées pour, avec et par la scène. <br />
        </p>
        <p className={styles.texteBio}>
          Les acteur.ice.s de la Syncope questionnent le monde actuel par
          l’entremise du symbole, de l&apos;image et de la fiction.
        </p>
        <div className={styles.shapeInText}></div>
      </div>
    </div>
  );
}
