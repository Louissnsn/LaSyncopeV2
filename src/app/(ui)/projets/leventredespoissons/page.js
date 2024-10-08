import Cover from "@/app/components/Cover";
import boue from "@/app/public/images/Covers/boue.jpg";

export default function PoissonsPage() {
  const title = ["TOUT CE QU'IL Y A", "DANS LE VENTRE", "DES POISSONS"];
  return (
    <div>
      <Cover image={boue} altText="Photographie du spectacle" title={title} />
    </div>
  );
}
