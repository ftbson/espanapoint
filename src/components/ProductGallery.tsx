"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  // Limiter à au plus 3 images
  const safeImages = images && images.length > 0 ? images.slice(0, 3) : ["/img/log.png"];
  const [activeIndex, setActiveIndex] = useState(0);

  // Gestion du glissement tactile ("avec la main" sur mobile/tablette)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Gestion du glissement à la souris ("avec la main" sur ordinateur)
  const isMouseDown = useRef(false);
  const mouseStartX = useRef<number | null>(null);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  }, [safeImages.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  }, [safeImages.length]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40; // Seuil minimum en pixels

    if (distance > minSwipeDistance) {
      // Glissé vers la gauche -> Image suivante
      nextImage();
    } else if (distance < -minSwipeDistance) {
      // Glissé vers la droite -> Image précédente
      prevImage();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown.current || mouseStartX.current === null) return;
    const distance = mouseStartX.current - e.clientX;
    const minDragDistance = 50;

    if (distance > minDragDistance) {
      nextImage();
    } else if (distance < -minDragDistance) {
      prevImage();
    }
    isMouseDown.current = false;
    mouseStartX.current = null;
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
    mouseStartX.current = null;
  };

  return (
    <div className="product-gallery" aria-label="Galería de imágenes del producto">
      {/* Zone d'image principale interactive */}
      <div
        className="product-gallery-main"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-roledescription="carrusel"
      >
        <Image
          src={safeImages[activeIndex]}
          alt={`${name} - imagen ${activeIndex + 1}`}
          className="product-gallery-img"
          width={600}
          height={600}
          sizes="(max-width: 768px) 100vw, 50vw"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          draggable={false}
        />

        {/* Flèches FontAwesome pour défiler (visibles s'il y a plus d'une image) */}
        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow gallery-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Ver imagen anterior"
            >
              <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </button>

            <button
              type="button"
              className="gallery-arrow gallery-next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Ver imagen siguiente"
            >
              <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </button>

            {/* Badge compteur d'images */}
            <span className="gallery-badge" aria-live="polite">
              <i className="fas fa-camera" aria-hidden="true"></i> {activeIndex + 1} / {safeImages.length}
            </span>
          </>
        )}
      </div>

      {/* Miniatures cliquables (au plus 3) */}
      {safeImages.length > 1 && (
        <div className="gallery-thumbnails" role="tablist">
          {safeImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              className={`gallery-thumb-btn ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver imagen ${index + 1}`}
              aria-selected={index === activeIndex}
              role="tab"
            >
              <Image
                src={image}
                alt={`${name} miniatura ${index + 1}`}
                className="gallery-thumb-img"
                width={70}
                height={70}
                sizes="70px"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

