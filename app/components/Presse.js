"use client";
import styles from "@/styles/Presse.module.css";
import { useProjectData } from "@/providers/ProjectDataContext";

export default function Presse() {
  const project = useProjectData();

  const presse = project?.presse ?? []; // si presse est undefined, on prend un tableau vide

  // console.log(project.presse[0].author);
  // console.log(project.presse[0].article);

  const infos = presse.map((data, i) => {
    // console.log(data);
    return (
      <div className={styles.presseContainer} key={i}>
        <a href={data.article} className={styles.link}>
          <p className={styles.author}>{data.author}</p>
        </a>
      </div>
    );
  });

  return (
    <div className={styles.parent}>
      <div className={styles.presse}>
        <div className={styles.titreContainer}>
          <h2 className={styles.titre}>ON PARLE DE NOUS</h2>
        </div>
        <div className={styles.contentContainer}>{infos}</div>
      </div>
    </div>
  );
}
