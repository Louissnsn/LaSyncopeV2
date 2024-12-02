import Cover from "@/components/Cover";

export default function Ecole() {
  const cover = {
    src: "/images/Covers/Iceberg.webp",
    title: ["ÉCOLE", "D'ÉTÉ"],
  };

  return (
    <div>
      <Cover
        src={cover.src}
        title={cover.title}
        altText="Photographie du spectacle"
      />
    </div>
  );
}
