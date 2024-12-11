"use client";
import styles from "@/styles/Dates.module.css";
import { useProjectData } from "../(ui)/projets/ProjectDataContext";

export default function Dates() {
  const project = useProjectData();

  const { aVenir = [], passées = [] } = project?.dates ?? {}; // si dates est undefined, on prend un tableau vide

  return (
    <div className={styles.parent}>
      <div className={styles.titreContainer}>
        <p className={styles.sousTitre}>PASSÉES</p>
        <p className={styles.titre}>DATES</p>
        <p className={styles.sousTitre}>FUTURES</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.datesPassees}>
          {passées.map((anneeData, anneeIndex) => (
            <div key={anneeIndex}>
              <h3>{anneeData.année}</h3>
              {anneeData.représentations.length === 0 ? (
                <p>Pas de dates passées pour {anneeData.année}.</p>
              ) : (
                <ul>
                  {anneeData.représentations.map((repr, reprIndex) => (
                    <p key={reprIndex}>
                      {repr.date} - {repr.lieu}
                    </p>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className={styles.shapeContainer}>
          <div className={styles.shape}></div>
        </div>

        <div className={styles.datesAvenir}>
          {aVenir.map((anneeData, anneeIndex) => (
            <div key={anneeIndex}>
              <h3 className={styles.annees}>{anneeData.année}</h3>
              {anneeData.représentations.length === 0 ? (
                <p>Pas de dates prévues pour {anneeData.année}.</p>
              ) : (
                <ul>
                  {anneeData.représentations.map((repr, reprIndex) => (
                    <p key={reprIndex}>
                      {repr.date} - {repr.lieu}
                    </p>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
