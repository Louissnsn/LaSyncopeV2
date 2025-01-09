import styles from "@/styles/Gallery.module.css";
import Image from "next/image";
import Link from "next/link";

const Gallery = ({ images }) => {
  const getLinkPath = (imageUrl) => {
    if (imageUrl.includes("Poisson")) return "/projets/leventredespoissons";
    if (imageUrl.includes("Nobel")) return "/projets/prixnobeldelamour";
    if (imageUrl.includes("Loup")) return "/projets/quandleloup";
    if (imageUrl.includes("Ecole")) return "/projets/ecoledete";
    return "/projets";
  };

  return (
    <div className={styles.gallery}>
      {images.map((imageUrl, index) => (
        <div key={index} className={styles.galleryItem}>
          <Link href={getLinkPath(imageUrl)}>
            <Image
              src={imageUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "contain",
              }}
              alt="Photographie du spectacle"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
