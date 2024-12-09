"use client";
import Cover from "@/components/Cover";
import nobel from "../../../../public/images/Covers/Nobel.webp";
import { useProjectData } from "../ProjectDataContext";
export default function Ecole() {
  const { title } = useProjectData();
  return (
    <div>
      <Cover src={nobel} title={title} altText="Photographie du spectacle" />
    </div>
  );
}
