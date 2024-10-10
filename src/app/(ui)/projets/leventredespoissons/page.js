import Cover from "@/app/components/Cover";
import boue from "@/app/public/images/Covers/boue.jpg";
import Presse from "@/app/components/Presse";
import confluence from "@/app/public/images/Spectacles/Poissons/confluence.webp";
import Distribution from "@/app/components/Distribution";
export default function PoissonsPage() {
  const title = ["TOUT CE QU'IL Y A", "DANS LE VENTRE", "DES POISSONS"];
  return (
    <div>
      <Cover image={boue} altText="Photographie du spectacle" title={title} />
      <Presse image={confluence} altText="Photographie des Poissons" />
      <Distribution />
    </div>
  );
}
