"use client";
import Cover from "@/components/Cover";
import styles from "@/styles/Loup.module.css";
import loup from "../../../../public/images/Covers/Loup.webp";
import { useProjectData } from "../ProjectDataContext";

export default function Loup() {
  const project = useProjectData();

  return (
    <div className={styles.container}>
      <Cover
        src={loup}
        title={project.title}
        altText="Photographie du spectacle"
        customPosition={project.customPosition}
      />
    </div>
  );
}
