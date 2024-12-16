import Carousel from "@/components/Carousel";
import cloudinary from "cloudinary";
import styles from "@/styles/Projets.module.css";
import Image from "next/image";
export default async function ProjetsPage() {
  const results = await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("public_id", "desc")
    .max_results(5)
    .execute();

  const images = results.resources.map((resource) => resource.secure_url);
  // console.log("URLs des images:", images);

  return (
    <div className={styles.container}>
      <Carousel images={images} />
    </div>
  );
}
