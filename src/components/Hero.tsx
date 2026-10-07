"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: "electronique",
    title: "Tecnología y electrónica",
    subtitle: "Catálogo de electrónica",
    description: "Consulta teléfonos, audio, informática y consolas disponibles en el catálogo.",
    image: "/img/iPhone16.jpg",
    link: "/?cat=electronique",
  },
  {
    id: "sport",
    title: "Deporte y fitness",
    subtitle: "Catálogo de deporte",
    description: "Explora calzado deportivo, equipos de ejercicio y accesorios.",
    image: "/img/PUMATazon6FractureFM.jpg",
    link: "/?cat=sport",
  },
  {
    id: "beaute",
    title: "Belleza y cuidado personal",
    subtitle: "Catálogo de belleza",
    description: "Consulta los productos de cuidado personal del catálogo.",
    image: "/img/CeraVeBaume.jpg",
    link: "/?cat=beaute",
  },
  {
    id: "cuisine",
    title: "Cocina y hogar",
    subtitle: "Catálogo de hogar",
    description: "Explora artículos para la cocina y el hogar.",
    image: "/img/NinjaFoodiFlexDrawerAir.jpg",
    link: "/?cat=cuisine",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="hero-section-container" aria-label="Categorías destacadas">
      <div className="hero-slider-left">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "slide-active" : ""}`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.image}
              alt=""
              className="slide-bg-img"
              fill
              sizes="(max-width: 900px) 100vw, 65vw"
              priority={index === 0}
            />
            <div className="slide-overlay" aria-hidden="true"></div>
            <div className="slide-content">
              <span className="slide-tag">{slide.subtitle}</span>
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-desc">{slide.description}</p>
              <Link href={slide.link} className="btn-hero-action" tabIndex={index === currentSlide ? 0 : -1}>
                Ver categoría
              </Link>
            </div>
          </div>
        ))}

        <div className="slider-dots" aria-label="Elegir categoría">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`dot-indicator ${index === currentSlide ? "dot-active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Mostrar ${slide.subtitle}`}
              aria-current={index === currentSlide ? "true" : undefined}
            />
          ))}
          <button
            type="button"
            className="slider-toggle"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
            aria-pressed={isPaused}
          >
            {isPaused ? "Reanudar" : "Pausar"}
          </button>
        </div>
      </div>

      <div className="hero-banners-right">
        <article className="right-banner-card text-light">
          <Image
            src="/img/adidasUnisexChaussure.jpg"
            alt=""
            className="banner-bg-img"
            fill
            sizes="(max-width: 900px) 100vw, 35vw"
          />
          <div className="banner-overlay" aria-hidden="true"></div>
          <div className="banner-content">
            <span className="banner-tag text-red">Deporte</span>
            <h3>Calzado y artículos deportivos</h3>
            <Link href="/?cat=sport" className="btn-banner-small">
              Ver productos
            </Link>
          </div>
        </article>
        <article className="right-banner-card text-light">
          <Image
            src="/img/SonyWH-1000XM5SA.jpg"
            alt=""
            className="banner-bg-img"
            fill
            sizes="(max-width: 900px) 100vw, 35vw"
          />
          <div className="banner-overlay" aria-hidden="true"></div>
          <div className="banner-content">
            <span className="banner-tag text-green">Electrónica</span>
            <h3>Audio y tecnología</h3>
            <Link href="/?cat=electronique" className="btn-banner-small">
              Ver productos
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
