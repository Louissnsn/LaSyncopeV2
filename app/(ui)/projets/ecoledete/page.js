import Cover from "@/components/Cover";
import Iceberg from "../../../../public/images/Covers/Iceberg 2.JPG";

export default function Ecole() {
  const title = ["ÉCOLE", "D'ÉTÉ"];
  return (
    <div>
      <Cover
        image={Iceberg}
        title={title}
        altText="Photographie du spectacle"
      />
    </div>
  );
}
