"use client";
import styles from "@/styles/Presse.module.css";
import { useProjectData } from "@/providers/ProjectDataContext";

export default function Presse() {
  const project = useProjectData();
  const presse = project?.presse ?? [];

  const infos = presse.map((data, i) => (
    <div className={styles.presseContainer} key={i}>
      <a
        href={data.article}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={styles.author}>{data.author}</p>
      </a>
    </div>
  ));

  return (
    <div className={styles.parent}>
      <div className={styles.presse}>
        <div className={styles.titreContainer}>
          <h2 className={styles.titre}>ON PARLE DE NOUS</h2>
        </div>
        <div className={styles.contentContainer}>
          {infos.length > 0 ? (
            infos
          ) : (
            <p className={styles.author}>
              Aucun article de presse pour le moment
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
