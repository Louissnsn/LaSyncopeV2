"use client";

import { createContext, useContext } from "react";
import { useSegments } from "./SegmentsProvider";
import { data1 } from "@/data/spectaclesData";

/* Le ProjectDataProvider a pour responsabilité d’utiliser l’information de la route (les segments) 
pour déterminer quelle donnée métier (par exemple, quel projet et quelles informations associées)
doit être affichée.
 */

const ProjectDataContext = createContext({});

export function ProjectDataProvider({ children }) {
  const segments = useSegments(); // par exemple ['ecoledete']
  // console.log("SEGMENT EN COURS ===>", segments);
  const currentProject = segments[0];

  const data = currentProject ? data1[currentProject] : {};

  return (
    <ProjectDataContext.Provider value={data}>
      {children}
    </ProjectDataContext.Provider>
  );
}

export function useProjectData() {
  return useContext(ProjectDataContext);
}
