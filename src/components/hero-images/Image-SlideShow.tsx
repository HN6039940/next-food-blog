"use client";

import { useState, useEffect } from "react";

import burgerImage from "@/assets/burger.jpg";
import curryImage from "@/assets/curry.jpg";
import dumplingsImage from "@/assets/dumplings.jpg";
import machcheeseImage from "@/assets/macncheese.jpg";
import schnitzelImage from "@/assets/schnitzel.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import tomatoSaladImage from "@/assets/tomato-salad.jpg";
import Image from "next/image";

const ImageSlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images = [
    {
      src: burgerImage,
      alt: "burger",
    },
    {
      src: curryImage,
      alt: "curry",
    },
    {
      src: dumplingsImage,
      alt: "dumplings",
    },
    {
      src: machcheeseImage,
      alt: "macncheese",
    },
    {
      src: schnitzelImage,
      alt: "schnitzel",
    },
    {
      src: pizzaImage,
      alt: "pizza",
    },
    {
      src: tomatoSaladImage,
      alt: "tomato-salad",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className=" relative min-h-[30rem] min-w-[40rem] overflow-hidden rounded-md">
      {images.map((image, index) => {
        return (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0  h-full w-full rounded-md object-cover ${index === currentImageIndex ? "  animate-fadeInImage " : " animate-fadeOutImage"}`}
          />
        );
      })}
    </div>
  );
};

export default ImageSlideShow;
