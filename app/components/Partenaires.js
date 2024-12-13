"use client";
import styles from "@/styles/Partenaires.module.css";
import { useProjectData } from "@/(ui)/projets/ProjectDataContext";
export default function Partenaires() {
  const { partenaires } = useProjectData();
  console.log(partenaires);

  return (
    <div className={styles.parent}>
      <p className={styles.titre}>PARTENAIRES ET SOUTIENS</p>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <p>SOUTIENS</p>
        {partenaires.soutiens.map((data, index) => {
          console.log(data);
          return (
            <div key={index}>
              <p>{data}</p>
            </div>
          );
        })}
        <p>SUBVENTION</p>
        {partenaires.subventions.map((data, index) => {
          console.log(data);
          return (
            <div key={index}>
              <p>{data.institution}</p>
              <p>{data.nom}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
