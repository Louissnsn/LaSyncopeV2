"use client";
import Cover from "@/components/Cover";
import ecole from "../../../../public/images/Covers/Iceberg.webp";
import { useProjectData } from "../ProjectDataContext";

export default function Ecole() {
  const project = useProjectData();

  return (
    <div>
      <Cover
        src={ecole}
        title={project.title}
        altText="Photographie du spectacle"
      />
    </div>
  );
}
