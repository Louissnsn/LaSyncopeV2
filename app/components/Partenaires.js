"use client";
import styles from "@/styles/Partenaires.module.css";
import { useProjectData } from "@/(ui)/projets/ProjectDataContext";
export default function Partenaires() {
  const project = useProjectData();

  const {
    soutiens = [],
    subventions = [],
    récompenses = [],
  } = project?.partenaires ?? {};

  return (
    <div className={styles.parent}>
      <p className={styles.titre}>PARTENAIRES ET SOUTIENS</p>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <p>SOUTIENS</p>
        {soutiens.map((data, index) => {
          // console.log(data);
          return (
            <div className={styles.partenaires} key={index}>
              <p>{data}</p>
            </div>
          );
        })}
        <p>SUBVENTIONS</p>
        {subventions.map((data, index) => {
          // console.log(data);
          return (
            <div className={styles.subventions} key={index}>
              <p>{data.institution}</p>
              <p>{data.nom}</p>
            </div>
          );
        })}
        <p>RÉCOMPENSES</p>
        {récompenses.map((data, index) => {
          // console.log(data);
          return (
            <div className={styles.récompenses} key={index}>
              <p>{data.date}</p>
              <p>{data.lieu}</p>
              <p>{data.nom}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
