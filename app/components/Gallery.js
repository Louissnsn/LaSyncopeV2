import styles from "@/styles/Gallery.module.css";
import Image from "next/image";
import Link from "next/link";

const Gallery = ({ images }) => {
  const getLinkPath = (imageUrl) => {
    if (imageUrl.includes("Poisson"))
      return {
        path: "/projets/leventredespoissons",
        name: "LE VENTRE DES POISSONS",
      };
    if (imageUrl.includes("Nobel"))
      return {
        path: "/projets/prixnobeldelamour",
        name: "PRIX NOBEL DE L'AMOUR",
      };
    if (imageUrl.includes("Loup"))
      return {
        path: "/projets/quandleloup",
        name: "QUAND LE LOUP N'Y EST PLUS",
      };
    if (imageUrl.includes("Ecole"))
      return { path: "/projets/ecoledete", name: "ÉCOLE D'ÉTÉ" };
    return "/projets";
  };


  return (
    <div className={styles.gallery}>
      {images.map((imageUrl, index) => {
        const { path, name } = getLinkPath(imageUrl);

        return (
          <div key={index} className={styles.galleryItem}>
            <Link href={path}>
              <div className={styles.imageWrapper}>
                <Image
                  src={imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt={`Photographie du spectacle: ${name}`}
                />
                <div className={styles.overlay}>
                  <span className={styles.projectName}>{name}</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
