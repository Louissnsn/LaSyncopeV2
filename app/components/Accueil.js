import styles from "@/styles/Accueil.module.css";
import cloudinary from "cloudinary";
import EmblaCarousel from "./CarouselEmbla";

export default async function Accueil() {
  try {
    const results = await cloudinary.v2.search
      .expression("folder:test AND resource_type:image")
      .sort_by("public_id", "desc")
      .max_results(4)
      .execute();

    const images = results.resources.map((resource) => resource.secure_url);
    console.log("url", images);

    return (
      <div className={styles.parent}>
        <h1 className={styles.titre}>LA SYNCOPE</h1>
        <EmblaCarousel images={images} />
      </div>
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des images:", error);
    return (
      <div className={styles.container}>
        Erreur lors du chargement des images
      </div>
    );
  }
}
