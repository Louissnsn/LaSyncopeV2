// "use client";
import styles from "./page.module.css";
import Cquoi from "./components/CquoiLaSyncope";
import Collaborateurices from "./components/Collaborateurices";
import Accueil from "./components/Accueil";
import Compagnie from "./components/Compagnie";
// import Loader from "@/components/Loader";

export default function Home() {
  return (
    <div className={styles.page}>
      <Compagnie />
      {/* <Accueil /> */}
      {/* <Loader /> */}
      <Cquoi />
      <Collaborateurices />
    </div>
  );
}
// import cloudinary from "cloudinary";
// import EmblaCarousel from "./components/CarouselEmbla";
// export default async function Home() {
//   try {
//     const results = await cloudinary.v2.search
//       .expression("folder:test AND resource_type:image")
//       .sort_by("public_id", "desc")
//       .max_results(4)
//       .execute();

//     const images = results.resources.map((resource) => resource.secure_url);
//     console.log("url", images);

//     return (
//       <div className={styles.page}>
//         <Compagnie />
//         {/* <h1 className={styles.titre}>LA SYNCOPE</h1> */}

//         <EmblaCarousel images={images} />
//         {/* <Loader /> */}
//         <Cquoi />
//         <Collaborateurices />
//       </div>
//     );
//   } catch (error) {
//     console.error("Erreur lors de la récupération des images:", error);
//     return (
//       <div className={styles.container}>
//         Erreur lors du chargement des images
//       </div>
//     );
//   }
// }
