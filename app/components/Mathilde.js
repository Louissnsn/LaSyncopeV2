import styles from "@/styles/Mathilde.module.css";
import photoMathilde from "../../public/images/119.webp";
import Image from "next/image";
import logoSVG from "../../public/logo/logo-syncope-v2.svg";

export default function Mathilde() {
  return (
    <div className={styles.matContainer}>
      <div className={styles.photoContainer}>
        <Image
          src={photoMathilde}
          alt="Photo de Mathilde"
          fill
          style={{
            borderRadius: "20px",
            objectFit: "cover",
            minWidth: "250px",
          }}
        />
        <div className={styles.nomContainer}>
          <p className={styles.nom}>
            MATHILDE
            <span className={styles.nomFamille}>BELLIN</span>
          </p>
        </div>
      </div>
      <div className={styles.bioTitle}>
        <p>B I O</p>
      </div>
      <div className={styles.bio}>
        <p className={styles.texteBio}>
          Après une première formation en tant que comédienne au Conservatoire
          d&apos;Art Dramatique de Toulouse, Mathilde Bellin intègre le
          département d&apos;études théâtrales de l&apos;École Normale
          Supérieure de Lyon en 2013.
        </p>
        <p className={styles.texteBio}>
          Elle y expérimente durant deux ans l&apos;écriture dramatique auprès
          de Joris Mathieu, Jean-Loup Rivière et Samuel Gallet. En 2016, elle
          intègre le TNP de Villeurbanne en qualité de dramaturge et conseillère
          littéraire auprès de Christian Schiaretti, qu&apos;elle va accompagner
          durant un an.
        </p>
        <p className={styles.texteBio}>
          En 2017, elle rejoint le Laboratoire de Formation au Théâtre Physique,
          où elle achève sa formation de comédienne. De 2018 à 2021, Mathilde
          Bellin est comédienne au sein de différentes compagnies, et doctorante
          en Études Théâtrales à l’Université Paris 8, où elle enseigne
          l&apos;Histoire de la mise en scène.
        </p>
        <p className={styles.texteBio}>
          En 2019, elle co-fonde la Syncope, avec qui elle écrit et monte son
          premier spectacle,{" "}
          <em>Tout ce qu&apos;il y a dans le ventre des poissons</em> (Prix du
          Jury du Festival de Théâtre de Maisons-Laffitte, 2022).
        </p>
        <p className={styles.texteBio}>
          Depuis cette date, elle donne également des cours de théâtre amateurs
          et des ateliers d&apos;écriture dans différentes structures publiques
          (médiathèques, associations). En 2024, elle est enseignante en Arts du
          spectacle à l&apos;Université Lyon 2 et à la mise en scène de
          l&apos;opéra <em>Lakmé</em>.
        </p>
        <div className={styles.zigZag}></div>
      </div>
      <div className={styles.barreLatérale}> </div>
      {/* <Image src={logoSVG} alt="logo au format SVG" /> */}
    </div>
  );
}
