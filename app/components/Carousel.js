"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";
import styles from "@/styles/Carousel.module.css";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Images in Carousel:", images);
  }, [images]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // On translate la "track" de -100% par slide
  const trackStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTrack} style={trackStyle}>
        {images.map((url, i) => (
          <div className={styles.carouselItem} key={i}>
            <Image
              src={url}
              alt={`slide-${i}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className={`${styles.carouselButton} ${styles.prev}`}
      >
        <ChevronLeft size={54} />
      </button>
      <button
        onClick={handleNext}
        className={`${styles.carouselButton} ${styles.next}`}
      >
        <ChevronRight size={54} />
      </button>
    </div>
  );
}
