"use client";
import Cover from "@/components/Cover";
import styles from "@/styles/Loup.module.css";
import loup from "../../../../public/images/Covers/Loup.webp";
import loup1 from "../../../../public/images/Spectacles/Loup/loup1.webp";
import Descriptif from "@/components/Descriptif";
import { useProjectData } from "../../../providers/ProjectDataContext";

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
      <Descriptif
        image={loup1}
        alText={project.altText}
        descriptif={project.description}
        title={project.textTitle}
        filePath={project.filePath}
      />
    </div>
  );
}
