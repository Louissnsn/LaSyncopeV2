// pages/index.js
import Image from "next/image";
import styles from "@/styles/Direction.module.css";
import photoMathilde from "@/public/images/119.webp";
import localFont from "next/font/local";

// const combine = localFont({ src: "../../../public/fonts/Combine.otf" });

const imageStyle = {
  borderRadius: "2%",
  objectFit: "contain",
};

export default function Direction() {
  return (
    <div className={styles.container}>
      <div className={styles.photoContainer}>
        <Image
          src={photoMathilde} // Replace with your image path
          alt="Photo de Mathilde"
          fill
          style={{ borderRadius: "3%", objectFit: "cover" }} // Ensures the image covers the container
        />
      </div>
      <div className={styles.nomContainer}>
        <p className={styles.nom}>Mathilde Bellin</p>
      </div>
      <div className={styles.bioTitle}>
        <p>B I O</p>
      </div>
      <div className={styles.bio}>
        <p className={styles.texteBio}>
          Après une première formation en tant que comédienne au Conservatoire
          d'Art Dramatique de Toulouse, Mathilde Bellin intègre le département
          d'études théâtrales de l'École Normale Supérieure de Lyon en 2013.
        </p>
        <p className={styles.texteBio}>
          Elle y expérimente durant deux ans l'écriture dramatique auprès de
          Joris Mathieu, Jean-Loup Rivière et Samuel Gallet. En 2016, elle
          intègre le TNP de Villeurbanne en qualité de dramaturge et conseillère
          littéraire auprès de Christian Schiaretti, qu'elle va accompagner
          durant un an.
        </p>
        <p className={styles.texteBio}>
          En 2017, elle rejoint le Laboratoire de Formation au Théâtre Physique,
          où elle achève sa formation de comédienne. De 2018 à 2021, Mathilde
          Bellin est comédienne au sein de différentes compagnies, et doctorante
          en Études Théâtrales à l’Université Paris 8, où elle enseigne
          l'Histoire de la mise en scène.
        </p>
        <p className={styles.texteBio}>
          En 2019, elle co-fonde la Syncope, avec qui elle écrit et monte son
          premier spectacle,{" "}
          <em>Tout ce qu'il y a dans le ventre des poissons</em> (Prix du Jury
          du Festival de Théâtre de Maisons-Laffitte, 2022).
        </p>
        <p className={styles.texteBio}>
          Depuis cette date, elle donne également des cours de théâtre amateurs
          et des ateliers d'écriture dans différentes structures publiques
          (médiathèques, associations). En 2024, elle est enseignante en Arts du
          spectacle à l'Université Lyon 2 et à la mise en scène de l'opéra{" "}
          <em>Lakmé</em>.
        </p>
        <div className={styles.zigZag}></div>
      </div>
      <div className={styles.barreLatérale}> </div>
      {/* <div className={styles.imageSection}>
        <Image src={photoMathilde} style={imageStyle} />
      </div>
      <div className={styles.textOverlay}>
        <h1 className={styles.overlayTitle}>MATHILDE BELLIN</h1>
      </div>
      <div className={styles.bioSection}>
        <div className={styles.bio}>
         
        </div>
      </div> */}
    </div>
  );
}
