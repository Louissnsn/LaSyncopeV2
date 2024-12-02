import Cover from "@/components/Cover";
import ecole from "../../../../public/images/Covers/Iceberg.webp";
export default function Ecole() {
  const cover = {
    title: ["ÉCOLE", "D'ÉTÉ"],
  };

  return (
    <div>
      <Cover
        src={ecole}
        title={cover.title}
        altText="Photographie du spectacle"
      />
    </div>
  );
}
