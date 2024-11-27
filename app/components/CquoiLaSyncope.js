import styles from "@/styles/Cquoi.module.css";
export default function Cquoi() {
  return (
    <div className={styles.parent}>
      <h1 className={styles.titre}>LA SYNCOPE</h1>
      <div className={styles.leftContainer}>
        <h3 className={styles.sousTitre}>
          QU&apos;EST-CE QUE C&apos;EST QUE CETTE SYNCOPE ?
        </h3>
        <div className={styles.textLeft}>
          <p className={styles.textDescription}>
            Une aventure artistique menée par Mathilde Bellin et Pauline Darcel,
            autour desquelles gravitent une multiplicité d’artiste
          </p>
          <br />
          <p className={styles.textDescription}>
            La Syncope est une compagnie de théâtre née en 2019 et domiciliée en
            Île-de-France. Elle s’est fondée sur une étroite collaboration entre
            Mathilde Bellin et Pauline Darcel, deux artistes de théâtre ayant
            développé une affinité artistique commune lors de leurs différentes
            formations.
          </p>
          <br />
          <p className={styles.textDescription}>
            La Syncope affirme aussi une grande confiance en l&apos;interprète
            et mène à bien des créations qui ont pour terrain de jeu des
            écritures contemporaines, pensées pour, avec et par la scène. Les
            artistes de la Syncope questionnent le monde actuel par l’entremise
            du symbole, de l&apos;image et de la fiction. Anciennement baptisée
            Syncope Collectif, La Syncope s’est féminisée en 2023 et accompagne
            des artistes de théâtre émergent·e·s et des auteur·ice·s de textes
            contemporains.
          </p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h3 className={styles.sousTitre}>NOS PRINCIPES CRÉATIFS</h3>

        <div className={styles.textRight}>
          <p className={styles.textDescription}>
            1- Dramaturgies imprévisibles et écritures en mutation : écrire
            avant, pendant, après le plateau.
          </p>
          <p className={styles.textDescription}>
            2- Une pépinière pour les jeunes auteur·ice·s de théâtre :
            accompagner des textes non édités, les aider à rencontrer leur
            public et une maison.
          </p>

          <p className={styles.textDescription}>
            3- Les créations de la Syncope tendent à entremêler théâtre et
            disciplines artistiques allogènes : arts plastiques, arts numériques
            y dialoguent avec l’art de la scène.
          </p>

          <p className={styles.textDescription}>
            4- Sororité et horizontalité : deux modes de fonctionnement
            appliqués au plateau, en régie, et dans nos bureaux.
          </p>
        </div>
      </div>
    </div>
  );
}
