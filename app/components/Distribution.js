"use client";
import styles from "@/styles/Distribution.module.css";
import Image from "next/image";
import logo from "../../public/logo/LogoBLANC.png";
import { useProjectData } from "@/providers/ProjectDataContext";

export default function Distribution() {
  const project = useProjectData();
  // console.log("project data in Distribution ==>", project);

  const distrib = project?.distribution ?? []; // si distribution est undefined, on prend un tableau vide

  const distribution = distrib.map((data, i) => {
    return (
      <div className={styles.distribText} key={i}>
        <h3 className={styles.role}>{data.role}</h3>
        <p className={styles.name}>{data.contributors.join(", ")}</p>
      </div>
    );
  });
  return (
    <div className={styles.parent}>
      <div className={styles.titreContainer}>
        <p className={styles.titre}>DISTRIBUTION</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="logo de la Syncope"
            sizes="(max-width: 768px) 80vw, 400px"
            height={500}
            width={300}
          />
        </div>

        <div className={styles.texteContainer}>{distribution}</div>
      </div>
    </div>
  );
}
