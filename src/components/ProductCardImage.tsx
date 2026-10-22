"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ProductCardImageProps {
  images: string[];
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
}

export default function ProductCardImage({
  images,
  alt,
  width = 320,
  height = 320,
  sizes = "(max-width: 600px) 46vw, (max-width: 1000px) 30vw, 280px",
}: ProductCardImageProps) {
  // Garantir au plus 3 images
  const safeImages = images && images.length > 0 ? images.slice(0, 3) : ["/img/log.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    // Défilement automatique toutes les 3 secondes (ou 2s au survol)
    const delay = isHovered ? 2000 : 3200;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeImages.length);
    }, delay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [safeImages.length, isHovered]);

  // S'il n'y a qu'une seule image
  if (safeImages.length <= 1) {
    return (
      <Image
        src={safeImages[0]}
        alt={alt}
        className="product-img"
        width={width}
        height={height}
        sizes={sizes}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      className="product-card-image-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {safeImages.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`product-card-slide ${index === currentIndex ? "active" : ""}`}
          aria-hidden={index !== currentIndex}
        >
          <Image
            src={src}
            alt={`${alt}${safeImages.length > 1 ? ` - vista ${index + 1}` : ""}`}
            className="product-img"
            width={width}
            height={height}
            sizes={sizes}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      ))}

      {/* Petits points indicateurs discrets de défilement */}
      <div className="product-card-dots" aria-label={`Imagen ${currentIndex + 1} de ${safeImages.length}`}>
        {safeImages.map((_, index) => (
          <span
            key={index}
            className={`product-card-dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

