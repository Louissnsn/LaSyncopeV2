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
      textTitle: "Un spectacle de Vassia Chavaroche et Pauline LEGÖEDEC",
      //CHANGER L'IMPORT
      filePath: "/pdf/poissons.pdf",

      description: `  À travers une amitié à distance, qui pourrait s’être écrite sur du vent, École d'été veut raconter l’écart des quotidiens qui peut exister entre deux pays éloignés (comme le tien et le mien), entre les fantasmes qu’on peut se faire et la réalité qui nous saute aux yeux. Et raconter aussi la difficulté de croire à ce qui arrive dans un autre pays et qui relève, d’une certaine manière, de la fiction tant qu’on ne l’a pas véritablement vécu. C'est la tentative de raconter l’histoire sincère et à fleur de peau, de personne à personnes, d’une amitié qui vacille en même temps qu’un pays s’effondre.
      
      
La mise en scène gravite autour d’une mappemonde lumineuse comme je gravite autour de toi, en étendant une constellation d’objets qui parlent de ton pays et racontent mon imaginaire.


Je m’adresse directement à toi comme à lui, avec doute et hésitation. Et on ne saurait plus dire ce qui est réel, ce qui est inventé, ce qui est du vécu ou ce qui est joué.


Sans grands artifices techniques, cette pièce peut exister dans n’importe quel espace qui ne soit pas un lieu de représentation théâtrale, en saisissant chaque occasion de se réinventer.`,
      dates: {
        aVenir: [{ année: "2025", représentations: [] }],
        passées: [
          { année: "2024", représentations: [] },
          {
            année: "2023",
            représentations: [
              {
                date: "Samedi 8 avril",
                lieu: "Les Plateaux Sauvages – Paris (XX)",
              },
              {
                date: "Mardi 3 janvier",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Mercredi 4 janvier",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Mardi 10 janvier",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Mercredi 11 janvier",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Mardi 17 janvier",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Mercredi 18 janvier",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Mardi 24 janvier",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Mercredi 25 janvier",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
            ],
          },
          {
            année: "2022",
            représentations: [
              {
                date: "Samedi 18 juin",
                lieu: "Hôpital Casanova - Saint-Denis",
              },
              {
                date: "Samedi 18 juin",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Dimanche 19 juin",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Samedi 11 juin",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Dimanche 12 juin",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Samedi 4 juin",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Dimanche 5 juin",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Samedi 28 mai",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Dimanche 29 mai",
                lieu: "Théâtre des Déchargeurs - Salle La Bohême",
              },
              {
                date: "Samedi 5 mars",
                lieu: "Théâtre Kantor – Lyon (69) / École normale supérieure",
              },
              {
                date: "Dimanche 6 mars",
                lieu: "Théâtre Kantor – Lyon (69) / École normale supérieure",
              },
              {
                date: "Dimanche 20 novembre",
                lieu: "Chez Lila - Paris II",
              },
              {
                date: "Mardi 1er novembre",
                lieu: "Chez Guillaume - Lizy (77)",
              },
              {
                date: "Dimanche 16 octobre",
                lieu: "Chez Emmanuelle - Montreuil (93)",
              },
              {
                date: "Mardi 4 octobre",
                lieu: "Chez Élisa et Serge - Ronchin (59)",
              },
              {
                date: "Mercredi 5 octobre",
                lieu: "Chez Élisa et Serge - Ronchin (59)",
              },
              {
                date: "Vendredi 6 mai",
                lieu: "Chez Gaspart et Lola - Paris XVIII",
              },
              {
                date: "Dimanche 24 avril",
                lieu: "Chez Françoise - Sceaux (92)",
              },
              {
                date: "Mercredi 9 mars",
                lieu: "Chez Hélène - Hellemmes (59)",
              },
              {
                date: "Mardi 8 mars",
                lieu: "Chez Blandine et Marc - Arras (62)",
              },
              {
                date: "Mercredi 2 février",
                lieu: "Chez Alex et Geoffroy - Lille (59)",
              },
            ],
          },
          {
            année: "2021",
            représentations: [
              {
                date: "Mercredi 27 octobre",
                lieu: "Pavillon Carré Baudouin – Paris XXème",
              },
              { date: "Mardi 14 septembre", lieu: "Asiathèque – Paris XI" },
              { date: "Vendredi 28 août", lieu: "FAR WEST – Penmarc'h (29)" },
              {
                date: "Mercredi 27 juillet",
                lieu: "Festival La Nuit derrière les forêts – Sorrus (62)",
              },
              {
                date: "Mardi 11 mai",
                lieu: "Théâtre à Durée Indéterminée – Paris XX",
              },
              {
                date: "Samedi 1er mai",
                lieu: "Villa Mais d'ici – Aubervilliers (93)",
              },
              {
                date: "Mercredi 1er décembre",
                lieu: "Chez Rose, Benoît, Laurie, Phil, Marie, Jaime, JB – Toulouse (31)",
              },
              {
                date: "Mardi 30 novembre",
                lieu: "Chez Rose, Benoît, Laurie, Phil, Marie, Jaime, JB – Toulouse (31)",
              },
              {
                date: "Lundi 29 novembre",
                lieu: "Chez Mia, Quentin et Théo – Toulouse (31)",
              },
              {
                date: "Mardi 23 novembre",
                lieu: "Chez Ségal, Simon, Basile, Nico, Sonia, Valentin – Villejuif (94)",
              },
              {
                date: "Dimanche 21 novembre",
                lieu: "Chez Aurélie – Paris XVIIIème",
              },
              {
                date: "Mercredi 17 novembre",
                lieu: "Chez Mélina – Lille (59)",
              },
              {
                date: "Mardi 16 novembre",
                lieu: "hez Marie-Joëlle – Paris XVIII",
              },
              {
                date: "Jeudi 14 octobre",
                lieu: "Chez Alain et Andrée – Lopérec (29)",
              },
              {
                date: "Mercredi 25 août",
                lieu: "Chez Claire et Guy – Guimaëc (29)",
              },
              {
                date: "Mardi 24 août",
                lieu: "Chez Michel et Patricia – Guimaëc (29)",
              },
              {
                date: "Lundi 28 juin",
                lieu: "Chez Loudmilla et Sophie – Paris XI",
              },
              {
                date: "Dimanche 27 juin",
                lieu: "Chez Mélissandre – Paris XIX",
              },
              {
                date: "Mercredi 16 juin",
                lieu: "Chez Dominque et Maryelle – Meudon (92)",
              },
              { date: "Dimanche 13 juin", lieu: "Chez Sandra – Paris XIX" },
              { date: "Vendredi 28 mai", lieu: "Chez Yvan – Paris XII" },
              {
                date: "Mercredi 19 mai",
                lieu: "Chez Dominque et Maryelle – Meudon (92)",
              },
              { date: "Mercredi 19 mai", lieu: "Chez Laura – Paris XX" },
              {
                date: "Mardi 27 avril",
                lieu: "Chez Victor et Virginie – Lyon (69)",
              },
              {
                date: "Dimanche 18 avril",
                lieu: "Chez Angele et Pauline – Paris XX",
              },
              { date: "Dimanche 14 mars", lieu: "Chez Philippe – Paris XX" },
              { date: "Dimanche 28 février", lieu: "Chez Philippe – Paris XX" },
              {
                date: "Dimanche 21 février",
                lieu: "Chez Marie – Les Lilas (93)",
              },
              {
                date: "Dimanche 31 janvier",
                lieu: "Chez Catherine – Sceaux (92)",
              },
              {
                date: "Dimanche 17 janvier",
                lieu: "Chez Mathilde et Youn – Saint-Ouen (93)",
              },
            ],
          },
          {
            année: "2020",
            représentations: [
              {
                date: "Samedi 26 septembre",
                lieu: "Festival La Mascarade - Nogent L'Artaud (02)",
              },
              { date: "Dimanche 29 novembre", lieu: "Chez Sandra - Paris XIX" },
              {
                date: "Dimanche 22 novembre",
                lieu: "Chez Marie - Les Lilas (93)",
              },
            ],
          },
        ],
      },
      distribution: [
        { role: "Texte", contributors: ["Vassia CHAVAROCHE"] },
        {
          role: "Mise en scène",
          contributors: ["Vassia CHAVAROCHE", "Pauline LEGÖEDEC"],
        },
        { role: "Interprétation", contributors: ["Pauline LEGÖEDEC"] },
      ],
    },
    prixnobeldelamour: {
      title: ["PRIX NOBEL", "DE L'AMOUR"],
      description: "Une autre description...",
      //CHANGER L'IMPORT
      filePath: "/pdf/poissons.pdf",

      dates: {
        aVenir: [{ année: "2025", représentations: [] }],
        passées: [{ année: "2024", représentations: [] }],
      },
      distribution: [
        { role: "Texte, mise en scène", contributors: ["Vassia CHAVAROCHE"] },
        {
          role: "Interprétation",
          contributors: [
            "Mona ABOUSAÏD",
            "Mélina BIGOT",
            "Laure BLATTER",
            "Pauline LEGÖEDEC",
            "Ghazal ZATI",
          ],
        },
      ],
    },
    quandleloup: {
      title: ["QUAND LE LOUP", "N'Y EST PLUS"],
      description: `
« Promenons-nous dans les bois, puisque le loup n’y est plus. » 


Pour ce spectacle, nous réécrivons le conte Le Petit Chaperon Rouge des Frères Grimm. Dans le conte de ces derniers, dont la fin, plus heureuse que celle de Charles Perrault, connaît deux versions, la grand-mère et sa petite fille sont mangées par le loup puis sauvées par un chasseur. Imaginons que cette  fois-ci, le Petit Chaperon Rouge déambule dans une forêt dépourvue de prédateurs : le conte commence, mais le loup refuse de jouer son rôle. Chassés et exterminés par les fusils des hommes, les loups ont presque tous définitivement disparu, et notre loup est le dernier à pouvoir prendre la parole.
Et si, pour un temps, la forêt n’était plus cette zone hostile, mais un lieu dans lequel un personnage féminin aurait tout loisir de s’égarer, de musarder ? Comment repenser la narration d’un conte sans prédateur, et d’une forêt dépourvue de danger ?


Conte, théâtre d'objet, marionnette et théâtre sonore : au carrefour des langages


Pour répondre à toutes ces questions, nous passons, en outre du conte et du récit, par le théâtre d’objet, la marionnette et le théâtre sonore. Dans notre processus créatif, chaque espèce vivante possède son propre mode d'expression scénique : les arbres ne sont qu'audibles, nous les animons en effet grâce au théâtre sonore et à différents bruitages. Rouge, la petite fille, est incarnée par une actrice, et ses souvenirs sont interprétés sur scène grâce au théâtre d'objet. Enfin, le loup est figuré grâce à une marionnette en papier.


L'histoire telle que nous la racontons


Rouge est une petite-fille timide, dont les joues prennent souvent  une teinte cramoisie à l’école. Un jour, elle apprend que sa mamie  est à l’hôpital : celle-ci souffre d’une maladie très rare qui forme un  masque de loup rouge sur le visage. Ni une ni deux, Rouge boucle  son sac à dos et part explorer la forêt pour y rencontrer le loup et  lui demander conseil. Mais tout ne se passe pas exactement comme  prévu...

Alors, Mère-grand, si le loup n’y est plus, les chasseurs non  plus ?`,

      textTitle:
        "Un spectacle de Mathilde BELLIN, Rose GUILLON et Pauline LEGÖEDEC",
      //CHANGER L'IMPORT
      filePath: "/pdf/poissons.pdf",

      dates: {
        aVenir: [
          {
            année: "2025",
            représentations: [
              {
                date: "Mercredi 2 février 2025",
                lieu: "Théâtre du Troisième Types (3T)- Saint-Denis",
              },
              {
                date: "Dimanche 9 février 2025",
                lieu: "Théâtre du Troisième Types (3T) - Saint-Denis",
              },
              {
                date: "Mercredi 12 février 2025",
                lieu: "Théâtre du Troisième Types (3T) - Saint-Denis ",
              },
              {
                date: "Dimanche 16 février 2025",
                lieu: "Théâtre du Troisième Types (3T) - Saint-Denis",
              },
              {
                date: "Mercredi 19 février 2025",
                lieu: "Théâtre du Troisième Types (3T) - Saint-Denis",
              },
              {
                date: "Dimanche 28 février 2025",
                lieu: "Théâtre du Troisième Types (3T) - Saint-Denis",
              },
            ],
          },
        ],
        passées: [{ année: "2024", représentations: [] }],
      },
      customPosition: "10% 35%",
      distribution: [
        {
          role: "Texte, mise en scène, interprétation",
          contributors: ["Mathilde BELLIN", "Rose GUILLON", "Pauline LEGÖEDEC"],
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
      textTitle: "UN SPECTACLE DE MATHILDE BELLIN",
      customPosition: "80% 10%",
      altText: "Photographie du spectacle",
      filePath: "/pdf/poissons.pdf",
      dates: {
        aVenir: [{ année: "2025", représentations: [] }],
        passées: [
          {
            année: "2022",
            représentations: [
              { date: "Jeudi 26 mai", lieu: "Théâtre de Maison-Laffitte" },
            ],
          },
          {
            année: "2021",
            représentations: [
              {
                date: "Samedi 30 octobre",
                lieu: "Salle de spectacle Cipriani - Saint-Ouen",
              },
            ],
          },
          {
            année: "2020",
            représentations: [
              { date: "Vendredi 7 février", lieu: "Centre Paris Anim' Mathis" },
              {
                date: "Jeudi 16 et vendredi 17 janvier",
                lieu: "Théâtre El Duende",
              },
            ],
          },
          {
            année: "2019",
            représentations: [
              {
                date: "Mercredi 13 novembre",
                lieu: "Théâtre de la Reine Blanche",
              },
            ],
          },
        ],
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
          "Juliette DUCERF",
          "Aurélien HOUVER",
          "Pauline LEGÖEDEC",
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
    partenaires: {
      soutiens: [
        "Teatro SESC Patativa do Assaré (Juazeiro do Norte, Brésil)",
        "Les Studios de Virecourt",
        "Unversité Paris 8",
      ],
      subventions: [
        { institution: "Ville de Paris", nom: "Quartiers Libres" },
        { institution: "Université Paris 8", nom: "Bourse FSDIE" },
      ],
      récompenses: [
        {
          date: "2023",
          lieu: "Festival BIOVIV'ART",
          nom: "Prix Jeunes auteurs de théâtre",
        },
        {
          date: "2022",
          lieu: "Festival de Théâtre de Maisons-Laffitte",
          nom: "Prix du jury 2022",
        },
      ],
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
