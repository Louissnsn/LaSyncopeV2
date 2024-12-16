"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CldImage } from "next-cloudinary";
import styles from "@/styles/Carousel.module.css";

export default function ImageCarousel({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className={styles.swiper}
    >
      {images.map((imgUrl, index) => (
        <SwiperSlide key={index}>
          <div className={styles.imageContainer}>
            <CldImage
              src={imgUrl}
              alt={`image-${index}`}
              fill
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
