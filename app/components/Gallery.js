import styles from "@/styles/Gallery.module.css";
import Image from "next/image";

const Gallery = ({ images }) => {
    return (
        <div className={styles.gallery}>
            {images.map((image, index) => (
                <div key={index} className={styles.galleryItem}>
                    <Image src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;