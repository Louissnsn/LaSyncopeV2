"use client";
import styles from "@/styles/Collaborateurices.module.css";
import { motion } from "framer-motion";
export default function Collaborateurices() {
  return (
    <div className={styles.parent}>
      <h2 className={styles.titre}>COLLABORATEUR.ICE.S</h2>
      <div className={styles.leftContainer}>
        <p className={styles.text}>
          Mona <span className={styles.noms}>ABOUSAÏD</span> comédienne
        </p>
        <br />
        <p className={styles.text}>
          Laure-Hélène <span className={styles.noms}>ANDRÉ</span> assistante
          mise en scène
        </p>
        <br />
        <p className={styles.text}>
          Soizic <span className={styles.noms}>BILLET</span> comédienne
        </p>
        <br />
        <p className={styles.text}>
          Mélina <span className={styles.noms}>BIGOT</span> comédienne
        </p>
        <br />
        <p className={styles.text}>
          Nicolas <span className={styles.noms}>BLANDIN</span> monteur vidéo,
          photographe
        </p>
        <br />
        <p className={styles.text}>
          Laure <span className={styles.noms}>BLATTER</span> comédienne
        </p>
        <br />
        <p className={styles.text}>
          Matisse <span className={styles.noms}>BONZON</span> comédien
        </p>
        <br />
        <p className={styles.text}>
          Émily <span className={styles.noms}>BÜCKER</span> cheffe monteuse
        </p>
        <br />
        <p className={styles.text}>
          Noémie <span className={styles.noms}>CAPRON</span> comédienne
        </p>
        <br />
        <p className={styles.text}>
          Marguerite <span className={styles.noms}>CHAIGNE</span> comédienne
        </p>
        <br />
        <p className={styles.text}>
          Vassia <span className={styles.noms}>CHAVAROCHE</span> auteur, metteur
          en scène
        </p>
        <br />
        <p className={styles.text}>
          Sibille <span className={styles.noms}>CLAIR</span> comédienne
        </p>
        <br />
        <p className={styles.text}>
          Catherine <span className={styles.noms}>COQ</span> autrice, lectrice
        </p>
        <br />
        <p className={styles.text}>
          Juliette <span className={styles.noms}>DUCERF</span> comédienne
        </p>
        <br />
        <p className={styles.text}>
          Felipe <span className={styles.noms}>FONSECA NOBRE</span> comédien
        </p>
        <br />
        <p className={styles.text}>
          Rose <span className={styles.noms}>GUILLON</span> comédienne,
          régisseuse, assistante mise en scène
        </p>
        <br />
        <p className={styles.text}>
          Aurélien <span className={styles.noms}>HOUVER</span> comédien
        </p>
        <br />
        <p className={styles.text}>
          Nicolas <span className={styles.noms}>HADOT</span> créateur sonore
        </p>
        <br />
        <p className={styles.text}>
          Marius <span className={styles.noms}>ORJOLLET</span> régisseur son
        </p>
        <br />
        <p className={styles.text}>
          Anne <span className={styles.noms}>PULCE</span> monteuse
        </p>
        <br />
        <p className={styles.text}>
          Gabriella <span className={styles.noms}>RAULT</span> comédienne
        </p>
        <br />
        <p className={styles.text}>
          Mathias <span className={styles.noms}>SAÏL</span> régisseur vidéo
        </p>
        <br />
        <p className={styles.text}>
          Isadora <span className={styles.noms}>TELES DE CASTRO E COSTA</span>{" "}
          vidéaste, graphiste
        </p>
        <br />
        <p className={styles.text}>
          Ghazal <span className={styles.noms}>ZATI</span> comédienne{" "}
        </p>
        <br />
        <p className={styles.text}>
          Mathieu <span className={styles.noms}>PICARD</span> musicien
        </p>
        <br />
        <p className={styles.text}>
          Alma <span className={styles.noms}>LIVERT</span> comédienne
        </p>
        <br />
      </div>
      <div className={styles.rightContainer}>
        <a
          className={styles.lien}
          href="pdf/portfolioCompagnie.pdf"
          download="portfolioCompagnie.pdf"
        >
          <span className={`${styles.letter} ${styles.p}`}>P</span>
          <span className={`${styles.letter} ${styles.o1}`}>O</span>
          <span className={`${styles.letter} ${styles.r}`}>R</span>
          <span className={`${styles.letter} ${styles.t}`}>T</span>
          <span className={`${styles.letter} ${styles.f}`}>F</span>
          <span className={`${styles.letter} ${styles.o2}`}>O</span>
          <span className={`${styles.letter} ${styles.l}`}>L</span>
          <span className={`${styles.letter} ${styles.i}`}>I</span>
          <span className={`${styles.letter} ${styles.o3}`}>O</span>
        </a>
      </div>
    </div>
  );
}
