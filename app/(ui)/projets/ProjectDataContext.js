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
  console.log("SEGMENT EN COURS ===>", segments);
  const currentProject = segments[0];

  // Toute la data de chacun des spectacles présents dans app/projets
  const projetData = {
    ecoledete: {
      title: ["ÉCOLE", "D'ÉTÉ"],
      description: "Une description...",
      dates: {
        aVenir: ["Pas de dates prévues pour le moment !"],
        passées: ["28/05/2023"],
      },
    },
    prixnobeldelamour: {
      title: ["PRIX NOBEL", "DE L'AMOUR"],
      description: "Une autre description...",
      dates: {
        aVenir: ["Pas de dates prévues pour le moment !"],
        passées: ["12/24/2024"],
      },
    },
    quandleloup: {
      title: ["QUAND LE LOUP", "N'Y EST PLUS"],
      description: "Encore une description...",
      dates: {
        aVenir: [
          "Mercredi 2 février 2025",
          "Mercredi 12 février 2025",
          "Mercredi 19 février 2025",
          "Dimanche 9 février 2025",
          "Dimanche 16 février 2025",
          "Dimanche 28 février 2025",
        ],
        passées: ["test/test/tes"],
      },
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
      customPosition: "80% 10%",

      dates: {
        aVenir: ["Pas de dates prévues pour le moment !"],
        passées: ["test/test/test"],
      },

      description: `  Tout ce qu’il y a dans le ventre des poissons raconte l’histoire d’un frère et d’une sœur, Augusto et Sophia, tous les deux originaires du petit village de Bento Rodrigues, au Brésil, et bientôt séparés par une catastrophe annoncée : la rupture du barrage de Marianna. Le 5 novembre 2015, une boue rouge, couleur du sang, se déverse sur Bento Rodrigues, engloutissant les maisons et contaminant le Rio Doce pour des décennies. 


      Alors qu’Augusto décide de rester dans son village, observant les poissons morts flotter à la surface de la boue jusqu'à la taille, Sophia s’échappe à la ville et gravite bientôt dans les hautes sphères du pouvoir. Au cœur de cet accident qui n'en est pas vraiment un, 
    on trouve notamment la Ministre de l'Environnement corrompue, sa conseillère politique arriviste, et le Président de la Société Samarco.
    
    
    Tous et toutes barbotent dans l'Apocalypse à leur manière et se demandent : n'aurait-on pas pu prédire la catastrophe ?`,
    },
    distribution: [
      { role: "Texte, mise en scène", contributors: ["Mathilde BELLIN"] },
      {
        role: "Interprétation",
        contributors: [
          "Soizic BILLET",
          "Matisse BONZON",
          "Pauline DARCEL",
          "Juliette DUCERF",
          "Aurélien HOUVER",
        ],
      },
      {
        role: "Assistanat à la mise en scène, régie générale, régie lumière",
        contributors: ["Rose GUILLON"],
      },
      {
        role: "Création vidéo",
        contributors: ["Isadora TELES DE CASTRO E COSTA"],
      },
      { role: "Régie vidéo", contributors: ["Mathias SAÏL"] },
      { role: "Création Sonore", contributors: ["Nicolas HADOT"] },
      { role: "Régie son", contributors: ["Nicolas HADOT", "Marius ORJOLLET"] },
    ],
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
