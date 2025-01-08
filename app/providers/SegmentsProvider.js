"use client";

import { createContext, useContext } from "react";
import { useSelectedLayoutSegments } from "next/navigation";

// Création d'un contexte pour stocker les segments
const SegmentsContext = createContext([]);

/* 
Le SegmentsProvider a pour rôle unique de fournir l’information sur la route en cours (les segments). 
 Il récupère cette donnée via useSelectedLayoutSegments() et la rend disponible. 
 */

export function SegmentsProvider({ children }) {
  const segments = useSelectedLayoutSegments();
  return (
    <SegmentsContext.Provider value={segments}>
      {children}
    </SegmentsContext.Provider>
  );
}

// Un hook pour consommer le contexte facilement
export function useSegments() {
  return useContext(SegmentsContext);
}
