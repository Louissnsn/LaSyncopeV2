"use client";
import styles from "@/styles/Dates.module.css";
import { useProjectData } from "../(ui)/projets/ProjectDataContext";

export default function Dates() {
  const project = useProjectData();
  console.log("composant mount");
  console.log("PROJECT DATES ==>", project.dates);
  // const datesToShow = project?.dates.passées?.map((date, index) => {
  //   return <span key={index}>{date}</span>;
  // });

  const dates = project?.dates ?? []; // si dates est undefined, on prend un tableau vide
  console.log("DATES ???", dates);
  const datesavenir = dates?.aVenir?.map((date, index) => {
    return (
      <span className={styles.dateTexte} key={index}>
        {date}
      </span>
    );
  });

  return (
    <div className={styles.parent}>
      <div className={styles.titreContainer}>
        <p className={styles.titre}>DATES</p>
      </div>
      <div className={styles.passées}>
        <p className={styles.texte}>PASSÉES</p>
      </div>
      <div className={styles.shapeContainer}>
        <div className={styles.shape}></div>
      </div>
      <div className={styles.futures}>
        <p className={styles.texte}>À VENIR</p>
      </div>
      <div className={styles.datesAvenir}> {datesavenir} </div>

      {/* <div className={styles.datesPassees}>{datesToShow}</div> */}
    </div>
  );
}
