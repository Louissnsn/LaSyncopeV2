import cloudinary from "cloudinary";
import styles from "@/styles/Projets.module.css";
import Gallery from "@/components/Gallery";
export default async function ProjetsPage() {

  try {
  const results = await cloudinary.v2.search
    .expression("folder:Gallery AND resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(4)
    .execute();

  const images = results.resources.map((resource) => resource.secure_url);
  console.log("URLs des images:", images);

  return (
    <div className={styles.container}>
      <Gallery images={images} />
    </div>
  );
} catch (error) {
  console.error("Erreur lors de la récupération des images:", error);
    return <div className={styles.container}>Erreur lors du chargement des images</div>;
}
}
