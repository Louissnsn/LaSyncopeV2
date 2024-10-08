import Cover from "@/app/components/Cover";
import Nobel from "@/app/public/images/Covers/Nobel.webp";

export default function Ecole() {
  const title = ["PRIX NOBEL", "DE L'AMOUR"];
  return (
    <div>
      <Cover image={Nobel} title={title} altText="Photographie du spectacle" />
    </div>
  );
}
