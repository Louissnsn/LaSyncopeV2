"use client";
import styles from "@/styles/Dates.module.css";
import { useProjectData } from "../(ui)/projets/ProjectDataContext";

export default function Dates() {
  const project = useProjectData();

  const { aVenir = [], passées = [] } = project?.dates ?? {}; // si dates est undefined, on prend un tableau vide

  return (
    <div className={styles.parent}>
      <div className={styles.titreContainer}>
        <p className={styles.titre}>DATES</p>
      </div>
      <div className={styles.passées}>
        <p className={styles.texte}>PASSÉES</p>
        {passées.map((anneeData, anneeIndex) => (
          <div key={anneeIndex} className={styles.dateTexte}>
            <h3>{anneeData.année}</h3>
            {anneeData.représentations.length === 0 ? (
              <p>Pas de dates passées pour cette année.</p>
            ) : (
              <ul>
                {anneeData.représentations.map((repr, reprIndex) => (
                  <li key={reprIndex}>
                    {repr.date} - {repr.lieu}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className={styles.shapeContainer}>
        <div className={styles.shape}></div>
      </div>
      <div className={styles.futures}>
        <p className={styles.texte}>À VENIR</p>
      </div>
      <div className={styles.datesAvenir}>
        {aVenir.map((anneeData, anneeIndex) => (
          <div key={anneeIndex} className={styles.dateTexte}>
            <h3>{anneeData.année}</h3>
            {anneeData.représentations.length === 0 ? (
              <p>Pas de dates prévues pour {anneeData.année}</p>
            ) : (
              <ul className={styles.dateTexte}>
                {anneeData.représentations.map((repr, reprIndex) => (
                  <li key={reprIndex}>
                    {repr.date} - {repr.lieu}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
