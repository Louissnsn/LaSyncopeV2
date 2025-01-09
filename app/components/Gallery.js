import styles from "@/styles/Gallery.module.css";
import Image from "next/image";

const Gallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((index) => {
        // console.log(index)
        return (
          <div key={index} className={styles.galleryItem}>
            <Image
              // placeholder="blur"
              src={index}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
              alt="Photo du spectacle"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
