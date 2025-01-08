"use client";
import Cover from "@/components/Cover";
import ecole from "../../../../public/images/Covers/Iceberg.webp";
import robeRouge from "../../../../public/images/Spectacles/Ecole/robeRouge.webp";
import { useProjectData } from "../../../providers/ProjectDataContext";
import Descriptif from "@/components/Descriptif";

export default function Ecole() {
  const project = useProjectData();

  return (
    <div>
      <Cover
        src={ecole}
        title={project.title}
        altText="Photographie du spectacle"
      />
      <Descriptif
        image={robeRouge}
        alText={project.altText}
        descriptif={project.description}
        title={project.textTitle}
        filePath={project.filePath}
      />
    </div>
  );
}
