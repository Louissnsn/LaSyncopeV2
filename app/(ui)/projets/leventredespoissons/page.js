"use client";
import Cover from "@/components/Cover";
import Descriptif from "@/components/Descriptif";
import choeur from "../../../../public/images/Spectacles/Poissons/insectes 3.jpg";
import poisson from "../../../../public/images/Covers/boue.webp";
import { useProjectData } from "../ProjectDataContext";

export default function PoissonsPage() {
  const project = useProjectData();

  const cover = {
    altText: "Photographie du spectacle",
    textTitle: "UN SPECTACLE DE MATHILDE BELLIN",
    filePath: "/pdf/poissons.pdf",
  };

  return (
    <div>
      <Cover
        src={poisson}
        customPosition={project.customPosition}
        altText={cover.altText}
        title={project.title}
      />
      <Descriptif
        image={choeur}
        altText={cover.altText}
        descriptif={project.description}
        title={cover.textTitle}
        filePath={cover.filePath}
      />
    </div>
  );
}
