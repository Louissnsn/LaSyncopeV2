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
          placeholder="blur"
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
          Supérieure de Lyon en 2013. Elle y expérimente durant deux ans
          l&apos;écriture dramatique auprès de Joris Mathieu, Jean-Loup Rivière
          et Samuel Gallet. En 2016, elle intègre le TNP de Villeurbanne en
          qualité de dramaturge et conseillère littéraire auprès de Christian
          Schiaretti, qu&apos;elle va accompagner durant un an.
        </p>
        <p className={styles.texteBio}>
          En 2017, elle rejoint le Laboratoire de Formation au Théâtre Physique,
          où elle achève sa formation de comédienne. De 2018 à 2021, Mathilde
          Bellin est comédienne au sein de différentes compagnies, et doctorante
          en Études Théâtrales à l’Université Paris 8, où elle enseigne
          notamment l&apos;Histoire de la mise en scène.
        </p>
        <p className={styles.texteBio}>
          Co-fondatrice et co-directrice artistique de la compagnie de théâtre «
          La Syncope», elle écrit et met en scène{" "}
          <em>Tout ce qu&apos;il y a dans le ventre des poissons</em> (Prix du
          Jury du Festival de Théâtre de Maisons-Laffitte en 2022, Prix des
          jeunes auteur·ice·s de théâtre du Festival Bioviv&apos;art) ainsi
          qu&apos;un second spectacle à destination des jeunes publics, intitulé
          <em> Quand le loup n&apos;y est plus </em>, en tournée depuis 2022.
        </p>
        <p className={styles.texteBio}>
          Depuis septembre 2023, elle est enseignante vacataire en licence
          d&apos;Arts du spectacle à l&apos;Université Lumière Lyon 2, et donne
          également des cours de théâtre amateur et des ateliers
          d&apos;expression corporelle et d’écriture dans différentes structures
          publiques (médiathèques, associations). En 2024, elle est à la mise en
          scène de l&apos;opéra <em>Lakmé </em>
          (création 2025, Théâtre d&apos;Albi).
        </p>

        <div className={styles.zigZag}></div>
      </div>
      <div className={styles.barreLatérale}> </div>
      {/* <Image src={logoSVG} alt="logo au format SVG" /> */}
    </div>
  );
}
