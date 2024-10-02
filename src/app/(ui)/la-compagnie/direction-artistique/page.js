// pages/index.js
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profileImage from "../public/profile-image.jpg"; // Assure-toi d'importer l'image dans le répertoire 'public'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.textOverlay}>
          <h1 className={styles.overlayTitle}>MATHILDE BELLIN</h1>
        </div>
      </div>
      <div className={styles.bioSection}>
        <div className={styles.bio}>
          <p>
            Après une première formation en tant que comédienne au Conservatoire
            d'Art Dramatique de Toulouse, Mathilde Bellin intègre le département
            d'études théâtrales de l'École Normale Supérieure de Lyon en 2013.
          </p>
          <p>
            Elle y expérimente durant deux ans l'écriture dramatique auprès de
            Joris Mathieu, Jean-Loup Rivière et Samuel Gallet. En 2016, elle
            intègre le TNP de Villeurbanne en qualité de dramaturge et
            conseillère littéraire auprès de Christian Schiaretti, qu'elle va
            accompagner durant un an.
          </p>
          <p>
            En 2017, elle rejoint le Laboratoire de Formation au Théâtre
            Physique, où elle achève sa formation de comédienne. De 2018 à 2021,
            Mathilde Bellin est comédienne au sein de différentes compagnies, et
            doctorante en Études Théâtrales à l’Université Paris 8, où elle
            enseigne l'Histoire de la mise en scène.
          </p>
          <p>
            En 2019, elle co-fonde la Syncope, avec qui elle écrit et monte son
            premier spectacle,{" "}
            <em>Tout ce qu'il y a dans le ventre des poissons</em> (Prix du Jury
            du Festival de Théâtre de Maisons-Laffitte, 2022).
          </p>
          <p>
            Depuis cette date, elle donne également des cours de théâtre
            amateurs et des ateliers d'écriture dans différentes structures
            publiques (médiathèques, associations). En 2024, elle est
            enseignante en Arts du spectacle à l'Université Lyon 2 et à la mise
            en scène de l'opéra <em>Lakmé</em>.
          </p>
        </div>
      </div>
    </div>
  );
}
