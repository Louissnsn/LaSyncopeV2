"use client";
import styles from "@/styles/Dates.module.css";
import { useProjectData } from "../(ui)/projets/ProjectDataContext";

export default function Dates() {
  const project = useProjectData();
  // console.log("PROJECT ==>", project);
  // const datesToShow = project?.dates.passées?.map((date, index) => {
  //   return <span key={index}>{date}</span>;
  // });
  const datesavenir = project?.dates.aVenir?.map((date, index) => {
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
      {project?.dates.aVenir && (
        <div className={styles.datesAvenir}> {datesavenir} </div>
      )}

      {/* <div className={styles.datesPassees}>{datesToShow}</div> */}
    </div>
  );
}
