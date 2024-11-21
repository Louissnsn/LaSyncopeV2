import Cover from "@/components/Cover";
import Dates from "@/components/Dates";
import Distribution from "@/components/Distribution";
import Descriptif from "@/components/Descriptif";

import Nobel from "../../../../public/images/Covers/Nobel.webp";

export default function Ecole() {
  const title = ["PRIX NOBEL", "DE L'AMOUR"];
  return (
    <div>
      <Cover image={Nobel} title={title} altText="Photographie du spectacle" />
      {/* <Descriptif
        image={}
        altText={altText}
        descriptif={}
        title={textTitle}
        filePath={filePath}
      /> */}
      <Distribution />
      {/* <Presse image={} altText="" /> */}
      <Dates />
    </div>
  );
}
