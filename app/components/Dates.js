"use client";
import styles from "@/styles/Dates.module.css";
import { useProjectData } from "../(ui)/projets/ProjectDataContext";
import ShowButton from "./ShowButton";
import { motion } from "framer-motion";
export default function Dates() {
  const project = useProjectData();

  const { aVenir = [], passées = [] } = project?.dates ?? {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1.5 },
      }}
      viewport={{ once: true }}
      className={styles.parent}
    >
      <div className={styles.titreContainer}>
        <p className={styles.sousTitre}>PASSÉES</p>
        <p className={styles.titre}>DATES</p>
        <p className={styles.sousTitre}>FUTURES</p>
      </div>
      <div className={styles.contentContainer}>
        {/* Dates passées */}
        <div className={styles.datesPassees}>
          {passées.map((anneeData, anneeIndex) => (
            <div key={anneeIndex}>
              <h3>{anneeData.année}</h3>
              {anneeData?.représentations?.length === 0 ? (
                <p>Pas de dates passées pour {anneeData.année}.</p>
              ) : (
                <ul>
                  {anneeData?.représentations?.length <= 3 ? (
                    // Si 3 dates ou moins, on les affiche directement
                    anneeData?.représentations?.map((repr, reprIndex) => (
                      <p key={reprIndex}>
                        {repr.date} - {repr.lieu}
                      </p>
                    ))
                  ) : (
                    // Si plus de 3 dates, on utilise ShowButton
                    <ShowButton>
                      {anneeData?.représentations?.map((repr, reprIndex) => (
                        <p key={reprIndex}>
                          {repr.date} - {repr.lieu}
                        </p>
                      ))}
                    </ShowButton>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Shape */}
        <div className={styles.shape}></div>

        {/* Dates futures */}
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
    </motion.div>
  );
}
