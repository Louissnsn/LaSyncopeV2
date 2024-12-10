"use client";
// import Gallery from "@/app/components/QuadGallery/page";
import styles from "@/styles/Projets.module.css";
import { useProjectData } from "./ProjectDataContext";

export default function Projets() {
  const project = useProjectData();
  return (
    <div className={styles.titre}>
      <p>Un peu de patience, ça arrive</p>
      {/* <Gallery /> */}
    </div>
  );
}
