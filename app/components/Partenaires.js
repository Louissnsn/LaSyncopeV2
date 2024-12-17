"use client";
import styles from "@/styles/Partenaires.module.css";
import { useProjectData } from "@/(ui)/projets/ProjectDataContext";
import { motion } from "framer-motion";
export default function Partenaires() {
  const project = useProjectData();

  const {
    soutiens = [],
    subventions = [],
    récompenses = [],
  } = project?.partenaires ?? {};

  let pageToShow;

  if (!project.partenaires) {
    pageToShow = <div></div>;
  } else {
    pageToShow = (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 2 },
        }}
        className={styles.parent}
      >
        <p className={styles.titre}>PARTENAIRES ET SOUTIENS</p>
        <div className={styles.right}>
          <div className={styles.partenaires}>
            <p className={styles.sousTitre}>SOUTIENS</p>
            {soutiens?.map((data, index) => {
              // console.log(data);
              return (
                <div key={index}>
                  <li>{data}</li>
                </div>
              );
            })}
          </div>
          <div className={styles.subventions}>
            {subventions.length > 0 && (
              <p className={styles.sousTitre}>SUBVENTIONS</p>
            )}
            {subventions.map((data, index) => {
              // console.log(data);
              return (
                <div key={index}>
                  <p>{data.institution}</p>
                  <li>{data.nom}</li>
                </div>
              );
            })}
          </div>
          <div className={styles.récompenses}>
            {récompenses.length > 0 && (
              <p className={styles.sousTitre}>RÉCOMPENSES</p>
            )}
            {récompenses.map((data, index) => {
              // console.log(data);
              return (
                <div key={index}>
                  <p>{data.date}</p>
                  <p>{data.lieu}</p>
                  <li>{data.nom}</li>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }

  return pageToShow;
}
