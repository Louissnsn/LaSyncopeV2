import Cover from "@/components/Cover";
import styles from "@/styles/Loup.module.css";
import loup from "../../../../public/images/Covers/Loup.webp";

export default function Loup() {
  const cover = {
    customPosition: "10% 35%",
    title: ["QUAND LE LOUP", "N'Y EST PLUS"],
  };
  return (
    <div className={styles.container}>
      <Cover
        src={loup}
        title={cover.title}
        altText="Photographie du spectacle"
        customPosition={cover.customPosition}
      />
    </div>
  );
}
