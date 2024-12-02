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
            Une aventure artistique menée par Mathilde Bellin et Pauline
            Legoëdec, autour desquelles gravitent une multiplicité d’artistes.
          </p>
          <br />
          <p className={styles.textDescription}>
            La Syncope est une compagnie de théâtre francilienne créée en 2019
            par Pauline Legoëdec et Mathilde Bellin, deux artistes de théâtre
            ayant développé une affinité artistique singulière lors de leurs
            différentes formations.
          </p>
          <br />
          <p className={styles.textDescription}>
            Elle affirme une grande confiance en l&apos;interprète et mène à
            bien des spectacles qui ont pour terrain de jeu des écritures
            contemporaines, pensées
            <span className={styles.italique}> pour, avec </span> et
            <span className={styles.italique}> par </span> la scène. La Syncope
            accompagne des artistes de théâtre et des auteur·ice·s de textes
            contemporains, et nourrit ainsi des collaborations complices et
            pérennes, notamment avec la comédienne Rose Guillon, les créateurs
            sonores Nicolas Hadot et Marius Orjollet, la vidéaste et
            plasticienne Isadora Teles, ou encore avec l&apos;auteur et metteur
            en scène Vassia Chavaroche.
          </p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2 className={styles.sousTitre2}>NOS PRINCIPES CRÉATIFS</h2>

        <div className={styles.textRight}>
          <p className={styles.textDescriptionRight}>
            1- Dramaturgies imprévisibles : écrire{" "}
            <span className={styles.italique}>avant, pendant, après</span> le
            plateau.
          </p>
          <p className={styles.textDescriptionRight}>
            2- Une compagnie pour de jeunes auteur·ice·s de théâtre :
            accompagner des textes non édités, les aider à rencontrer leur
            public.
          </p>

          <p className={styles.textDescriptionRight}>
            3- Les créations de la Syncope questionnent le monde actuel par
            l’entremise de la fiction.
          </p>

          <p className={styles.textDescriptionRight}>
            4- Entremêler théâtre et disciplines artistiques allogènes : arts
            plastiques, arts numériques y dialoguent avec l’art de la scène.
          </p>
          <p className={styles.textDescriptionRight}>
            5- Sororité et horizontalité : deux modes de fonctionnement
            appliqués au plateau, en régie, et dans nos bureaux. Anciennement
            baptisée &quot;Syncope Collectif&quot;, La Syncope s’est
            d&apos;ailleurs féminisée en 2023.
          </p>
        </div>
      </div>
      <div className={styles.zigZag}></div>
    </div>
  );
}
