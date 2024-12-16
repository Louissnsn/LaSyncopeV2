"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CldImage } from "next-cloudinary";

import Image from "next/image";

export default function ImageCarousel({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      style={{ width: "800px", height: "auto" }}
    >
      {images.map((imgUrl, index) => (
        <SwiperSlide key={index}>
          <div style={{ position: "relative", width: "100%", height: "500px" }}>
            <CldImage
              src={imgUrl}
              alt={`image-${index}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
