import Cover from "@/components/Cover";
import Dates from "@/components/Dates";
import Distribution from "@/components/Distribution";
import Descriptif from "@/components/Descriptif";

export default function Ecole() {
  const cover = { src: "/images/Covers/Nobel.webp" };

  const title = ["PRIX NOBEL", "DE L'AMOUR"];
  return (
    <div>
      <Cover
        src={cover.src}
        title={title}
        altText="Photographie du spectacle"
      />
    </div>
  );
}
