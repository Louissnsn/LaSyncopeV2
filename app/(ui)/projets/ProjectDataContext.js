"use client";

import { createContext, useContext } from "react";
import { useSegments } from "./SegmentsProvider"; // On réutilise les segments

/* Le ProjectDataProvider a pour responsabilité d’utiliser l’information de la route (les segments) 
pour déterminer quelle donnée métier (par exemple, quel projet et quelles informations associées)
doit être affichée.
 */

const ProjectDataContext = createContext({});

export function ProjectDataProvider({ children }) {
  const segments = useSegments(); // par exemple ['ecoledete']
  const currentProject = segments[0];

  const projetData = {
    ecoledete: {
      title: ["ÉCOLE", "D'ÉTÉ"],
      description: "Une description...",
      dates: {
        aVenir: "Pas de dates prévues pour le moment !",
        passées: ["28/05/2023"],
      },
    },
    prixnobeldelamour: {
      title: ["PRIX NOBEL", "DE L'AMOUR"],
      description: "Une autre description...",
      dates: ["12/24/2024"],
    },
    quandleloup: {
      title: ["QUAND LE LOUP", "N'Y EST PLUS"],
      description: "Encore une description...",
      dates: ["12/24/2024"],
      customPosition: "10% 35%",
      distribution: [
        {
          role: "Texte, mise en scène, interprétation",
          contributors: ["Mathilde BELLIN", "Pauline DARCEL", "Rose GUILLON"],
        },
        { role: "Création sonore", contributors: ["Rebecca MEYER"] },
        { role: "Création lumière", contributors: ["Rose GUILLON"] },
        {
          role: "Crédits images",
          contributors: ["Nicolas Blandin", "Jason RESPILIEUX"],
        },
      ],
    },
    leventredespoissons: {
      title: ["TOUT CE QU'IL Y A", "DANS LE VENTRE", "DES POISSONS"],
      datesAvenir: "Pas de dates prévues pour le moment !",

      description: `  Tout ce qu’il y a dans le ventre des poissons raconte l’histoire d’un frère et d’une sœur, Augusto et Sophia, tous les deux originaires du petit village de Bento Rodrigues, au Brésil, et bientôt séparés par une catastrophe annoncée : la rupture du barrage de Marianna. Le 5 novembre 2015, une boue rouge, couleur du sang, se déverse sur Bento Rodrigues, engloutissant les maisons et contaminant le Rio Doce pour des décennies. 


      Alors qu’Augusto décide de rester dans son village, observant les poissons morts flotter à la surface de la boue jusqu'à la taille, Sophia s’échappe à la ville et gravite bientôt dans les hautes sphères du pouvoir. Au cœur de cet accident qui n'en est pas vraiment un, 
    on trouve notamment la Ministre de l'Environnement corrompue, sa conseillère politique arriviste, et le Président de la Société Samarco.
    
    
    Tous et toutes barbotent dans l'Apocalypse à leur manière et se demandent : n'aurait-on pas pu prédire la catastrophe ?`,
      dates: ["25/12/2024", "12/12/12"],
    },
  };

  const data = currentProject ? projetData[currentProject] : {};

  return (
    <ProjectDataContext.Provider value={data}>
      {children}
    </ProjectDataContext.Provider>
  );
}

export function useProjectData() {
  return useContext(ProjectDataContext);
}
