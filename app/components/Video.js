"use client";
import dynamic from "next/dynamic";

import { useProjectData } from "@/(ui)/projets/ProjectDataContext";
import styles from "@/styles/Video.module.css";
export default function VideoVimeo() {
  const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
  });
  const project = useProjectData();
  const urlID = project.teasers[0].urlID;

  return (
    <div className={styles.videoContainer}>
      <ReactPlayer
        url={`https://vimeo.com/${urlID}`}
        controls
        width="100%"
        height="100%"
        style={{ maxWidth: "100%", aspectRatio: "16/9" }}
      />
    </div>
  );
}
