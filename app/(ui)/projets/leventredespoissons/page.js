"use client";
import Cover from "@/components/Cover";
import Descriptif from "@/components/Descriptif";
import choeur from "../../../../public/images/Spectacles/Poissons/insectes 3.jpg";
import poisson from "../../../../public/images/Covers/boue.webp";
import { useProjectData } from "../../../providers/ProjectDataContext";

export default function PoissonsPage() {
  const project = useProjectData();
  // console.log(project);

  return (
    <div>
      <Cover
        src={poisson}
        customPosition={project.customPosition}
        altText={project.altText}
        title={project.title}
      />
      <Descriptif
        image={choeur}
        altText={project.altText}
        descriptif={project.description}
        title={project.textTitle}
        filePath={project.filePath}
      />
    </div>
  );
}
