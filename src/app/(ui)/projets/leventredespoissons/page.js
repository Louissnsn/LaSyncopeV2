import Cover from "@/app/components/Cover";
import boue from "@/app/public/images/Covers/boue.jpg";
import Presse from "@/app/components/Presse";
import confluence from "@/app/public/images/Spectacles/Poissons/confluence.webp";
import Distribution from "@/app/components/Distribution";
import Descriptif from "@/app/components/Descriptif";
import choeur from "@/app/public/images/Spectacles/Poissons/insectes 3.jpg";
import Dates from "@/app/components/Dates";

export default function PoissonsPage() {
  const title = ["TOUT CE QU'IL Y A", "DANS LE VENTRE", "DES POISSONS"];
  const altText = "Photographie du spectacle";
  const descriptif = `Tout ce qu’il y a dans le ventre des poissons raconte l’histoire d’un frère et d’une sœur, Augusto et Sophia, tous les deux originaires du petit village de Bento Rodrigues, au Brésil, et bientôt séparés par une catastrophe annoncée : la rupture du barrage de Marianna. Le 5 novembre 2015, une boue rouge, couleur du sang, se déverse sur Bento Rodrigues, engloutissant les maisons et contaminant le Rio Doce pour des décennies. 
Alors qu’Augusto décide de rester dans son village, observant les poissons morts flotter à la surface de la boue jusqu'à la taille, Sophia s’échappe à la ville et gravite bientôt dans les hautes sphères du pouvoir. Au cœur de cet accident qui n'en est pas vraiment un, on trouve notamment la Ministre de l'Environnement corrompue, sa conseillère politique arriviste, et le Président de la Société Samarco. 
Tous et toutes barbotent dans l'Apocalypse à leur manière et se demandent : n'aurait-on pas pu prédire la catastrophe ?`;
  const textTitle = "UN SPECTACLE DE MATHILDE BELLIN";

  return (
    <div>
      <Cover image={boue} altText={altText} title={title} />
      <Descriptif
        image={choeur}
        altText={altText}
        descriptif={descriptif}
        title={textTitle}
      />
      <Distribution />
      <Presse image={confluence} altText="Photographie des Poissons" />
      <Dates />
    </div>
  );
}
