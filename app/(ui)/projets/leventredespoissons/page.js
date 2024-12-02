import Cover from "@/components/Cover";
import Presse from "@/components/Presse";
import confluence from "../../../../public/images/Spectacles/Poissons/confluence.webp";
import Distribution from "@/components/Distribution";
import Descriptif from "@/components/Descriptif";
import choeur from "../../../../public/images/Spectacles/Poissons/insectes 3.jpg";
import Dates from "@/components/Dates";

export default function PoissonsPage() {
  const cover = {
    src: "/images/Covers/boue.webp",
    customPosition: "80% 10%",
    title: ["TOUT CE QU'IL Y A", "DANS LE VENTRE", "DES POISSONS"],
    altText: "Photographie du spectacle",
    descriptif: `  Tout ce qu’il y a dans le ventre des poissons raconte l’histoire d’un frère et d’une sœur, Augusto et Sophia, tous les deux originaires du petit village de Bento Rodrigues, au Brésil, et bientôt séparés par une catastrophe annoncée : la rupture du barrage de Marianna. Le 5 novembre 2015, une boue rouge, couleur du sang, se déverse sur Bento Rodrigues, engloutissant les maisons et contaminant le Rio Doce pour des décennies. 


  Alors qu’Augusto décide de rester dans son village, observant les poissons morts flotter à la surface de la boue jusqu'à la taille, Sophia s’échappe à la ville et gravite bientôt dans les hautes sphères du pouvoir. Au cœur de cet accident qui n'en est pas vraiment un, 
on trouve notamment la Ministre de l'Environnement corrompue, sa conseillère politique arriviste, et le Président de la Société Samarco.


Tous et toutes barbotent dans l'Apocalypse à leur manière et se demandent : n'aurait-on pas pu prédire la catastrophe ?`,
    textTitle: "UN SPECTACLE DE MATHILDE BELLIN",
    filePath: "/pdf/poissons.pdf",
  };

  return (
    <div>
      <Cover
        src={cover.src}
        customPosition={cover.customPosition}
        altText={cover.altText}
        title={cover.title}
      />
      <Descriptif
        image={choeur}
        altText={cover.altText}
        descriptif={cover.descriptif}
        title={cover.textTitle}
        filePath={cover.filePath}
      />
      {/* <Distribution /> */}
      {/* <Presse image={confluence} altText="Photographie des Poissons" /> */}
      {/* <Dates /> */}
    </div>
  );
}
