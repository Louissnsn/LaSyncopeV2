import Cover from "@/components/Cover";
import Dates from "@/components/Dates";
import Distribution from "@/components/Distribution";
import Descriptif from "@/components/Descriptif";
import nobel from "../../../../public/images/Covers/Nobel.webp";
export default function Ecole() {
  const title = ["PRIX NOBEL", "DE L'AMOUR"];
  return (
    <div>
      <Cover src={nobel} title={title} altText="Photographie du spectacle" />
    </div>
  );
}
