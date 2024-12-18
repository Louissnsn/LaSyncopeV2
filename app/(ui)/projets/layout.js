"use client";
import Dates from "@/components/Dates";
import Presse from "@/components/Presse";
import Partenaires from "@/components/Partenaires";
import Distribution from "@/components/Distribution";
import { SegmentsProvider } from "./SegmentsProvider";
import { ProjectDataProvider } from "./ProjectDataContext";
import { usePathname } from "next/navigation";

const ProjetLayout = ({ children }) => {
  const pathname = usePathname();

  // Détermine les enfants spécifiques
  const isEcoledete = pathname.startsWith("/projets/ecoledete");
  const isQuandleloup = pathname.startsWith("/projets/quandleloup");
  const isLeventredespoissons = pathname.startsWith(
    "/projets/leventredespoissons"
  );
  const isPrixnobeldelamour = pathname.startsWith("/projets/prixnobeldelamour");

  return (
    <div>
      <SegmentsProvider>
        <ProjectDataProvider>
          {children}
          {isEcoledete ||
          isLeventredespoissons ||
          isPrixnobeldelamour ||
          isQuandleloup ? (
            <>
              <Distribution />
              <Dates />
              <Partenaires />
              <Presse />
            </>
          ) : null}
        </ProjectDataProvider>
      </SegmentsProvider>
    </div>
  );
};
export default ProjetLayout;
