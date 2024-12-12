"use client";
import Cover from "@/components/Cover";
import nobel from "../../../../public/images/Covers/Nobel.webp";
import Descriptif from "@/components/Descriptif";
import nobel1 from "../../../../public/images/Spectacles/Nobel/Nobel1.webp";
import { useProjectData } from "../ProjectDataContext";

export default function Ecole() {
  const project = useProjectData();
  return (
    <div>
      <Cover
        src={nobel}
        title={project.title}
        altText="Photographie du spectacle"
      />
      <Descriptif
        image={nobel1}
        alText={project.altText}
        descriptif={project.description}
        title={project.textTitle}
        filePath={project.filePath}
      />
    </div>
  );
}
