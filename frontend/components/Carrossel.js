import React from "react";
import imgCarrossel from "@/data/dataCarrossel";
import styles from "../styles/Carrossel.module.css";

export default function Carrossel() {
  return (
    <div
      id="carouselExampleInterval"
      className={`carousel slide ${styles.containercarrossel}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {imgCarrossel.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval={20000}
          >
            <img
              src={item.imagemCarrossel}
              className={`d-block w-100 ${styles.imgcarrossel}`}
              alt={`Imagem ${index}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}
