"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { image: "/images/slide1.jpg", alt: "img1" },
    { image: "/images/slide2.jpg", alt: "img2" },
    { image: "/images/slide3.jpg", alt: "img3" },
    { image: "/images/slide4.jpg", alt: "img4" },
  ];

  useEffect(() => {
    const inteval = setInterval(() => {
      setActiveIndex((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(inteval);
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <Image
        src={images?.[activeIndex]?.image}
        alt={images?.[activeIndex]?.alt}
        width={200}
        height={500}
        className="object-cover"
      />
    </div>
  );
};

export default ImageSlider;
