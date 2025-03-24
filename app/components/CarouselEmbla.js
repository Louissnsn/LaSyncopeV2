"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "@/styles/EmblaCarousel.module.css";
import { useEffect, useCallback } from "react";

export default function EmblaCarousel({ images }) {
  // console.log(images);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <h1 className={styles.titre}>LA SYNCOPE</h1>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((imgUrl, index) => (
            <div className={styles.embla__slide} key={index}>
              <Image
                src={imgUrl}
                alt={`image - ${index}`}
                sizes="50vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
              />
              {/* <div className={styles.slideImageWrapper}>
                <Image
                  src={imgUrl}
                  alt={`image-${index}`}
                  fill // on utilise fill pour remplir le conteneur parent
                  style={{
                    objectFit: "cover", // recadre l’image pour remplir complètement
                    customPosition: "center",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div> */}
            </div>
          ))}
        </div>

        <div className={styles.embla__controls}>
          <div className={styles.embla__buttons}>
            <button className={styles.embla__button} onClick={scrollPrev}>
              <svg className={styles.embla__button__svg} viewBox="0 0 532 532">
                <path
                  fill="pink"
                  d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
              </svg>
            </button>
            <button className={styles.embla__button} onClick={scrollNext}>
              <svg className={styles.embla__button__svg} viewBox="0 0 532 532">
                <path
                  fill="pink"
                  d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
