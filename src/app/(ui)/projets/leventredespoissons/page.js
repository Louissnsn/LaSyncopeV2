import Cover from "@/app/components/Cover";
import boue from "@/app/public/images/Covers/boue.jpg";
import Presse from "@/app/components/Presse";
import confluence from "@/app/public/images/Spectacles/Poissons/confluence.webp";
import Distribution from "@/app/components/Distribution";
import Descriptif from "@/app/components/Descriptif";
import choeur from "@/app/public/images/Spectacles/Poissons/insectes 3.jpg";

export default function PoissonsPage() {
  const title = ["TOUT CE QU'IL Y A", "DANS LE VENTRE", "DES POISSONS"];
  const altText = "Photographie du spectacle";
  return (
    <div>
      <Cover image={boue} altText={altText} title={title} />
      <Descriptif image={choeur} altText={altText} />
      <Presse image={confluence} altText="Photographie des Poissons" />
      <Distribution />
    </div>
  );
}
