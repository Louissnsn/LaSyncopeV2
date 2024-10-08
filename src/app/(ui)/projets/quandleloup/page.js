import Cover from "@/app/components/Cover";
import LoupCover from "@/app/public/images/Covers/Loup.JPG";

export default function Loup() {
  const title = ["QUAND LE LOUP", "N'Y EST PLUS"];
  return (
    <div>
      <Cover
        image={LoupCover}
        title={title}
        altText="Photographie du spectacle"
      />
    </div>
  );
}
