"use client";
import Cover from "@/components/Cover";
import nobel from "../../../../public/images/Covers/Nobel.webp";
import Descriptif from "@/components/Descriptif";
import nobel1 from "../../../../public/images/Spectacles/Nobel/Nobel1.webp";
// import Video from "@/components/Video";
import { useProjectData } from "../../../providers/ProjectDataContext";

export default function Ecole() {
  const project = useProjectData();
  return (
    <div>
      <Cover
        src={nobel1}
        title={project.title}
        altText="Photographie du spectacle"
      />
      <Descriptif
        image={nobel}
        alText={project.altText}
        descriptif={project.description}
        title={project.textTitle}
        filePath={project.filePath}
      />
      {/* <Video /> */}
    </div>
  );
}
