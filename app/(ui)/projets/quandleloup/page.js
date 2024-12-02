import Cover from "@/components/Cover";
import styles from "@/styles/Loup.module.css";

export default function Loup() {
  const cover = {
    src: "/images/Covers/Loup.webp",
    customPosition: "10% 35%",
    title: ["QUAND LE LOUP", "N'Y EST PLUS"],
  };
  return (
    <div className={styles.container}>
      <Cover
        src={cover.src}
        title={cover.title}
        altText="Photographie du spectacle"
        customPosition={cover.customPosition}
      />
    </div>
  );
}
