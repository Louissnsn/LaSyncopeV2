"use client";
import ReactMarkdown from "react-markdown";

import styles from "@/styles/Descriptif.module.css";
import DownloadButton from "./DownloadButton";
import { motion } from "framer-motion";
import VideoVimeo from "./Video";
import { useProjectData } from "@/providers/ProjectDataContext";
export default function Descriptif({ title, filePath }) {
  const project = useProjectData();
  console.log("project", project.description);
  return (
    <div className={styles.parent}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        viewport={{ once: "true" }}
        className={styles.textInFirst}
      >
        <h2 className={styles.titre}>{title}</h2>
        {project.description.map((data, index) => {
          if (data.type === "citation") {
            return (
              <blockquote className={styles.blockquote} key={index}>
                {data.texte}
              </blockquote>
            );
          }
        })}
        <div className={styles.texte}>
          {project.description.map((data, index) => {
            if (data.type === "paragraphe" || data.type === "titre") {
              const className =
                data.type === "titre" ? styles.titre : styles.paragraphe;

              return (
                <div className={className} key={index}>
                  <ReactMarkdown>{data.texte}</ReactMarkdown>
                </div>
              );
            }
            return null;
          })}
        </div>

        <DownloadButton filePath={filePath} />
      </motion.div>
      <div className={styles.videoContainer}>
        <h2 className={styles.titre}>Teaser</h2>
        <div className={styles.teaser}>
          <VideoVimeo />
        </div>
      </div>
    </div>
  );
}
