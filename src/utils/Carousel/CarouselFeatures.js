import React from "react";
import styles from "./carouselFeatures.module.css";

import { NavLink } from "react-router-dom";

import CarouselFeaturesSliders from "./CarouselFeaturesSliders";

const CarouselFeatures = () => {
  return (
    <CarouselFeaturesSliders>
      <NavLink to="/stocks" className={`${styles.item} ${styles["item-1"]}`}>
        <div className={styles.stocksTitle}>Акции</div>
        <div className={styles.stocksContent}>
          Скидки, рассрочки, выгодные комплекты
        </div>
      </NavLink>
      <NavLink
        to="/assemblePc"
        className={`${styles.item} ${styles["item-2"]}`}
      >
        <div className={styles.assemblePcTitle}>Собрать ПК</div>
        <div className={styles.assemblePcContent}>
          Без проблем c совместимостью
        </div>
      </NavLink>
      <NavLink to="/service" className={`${styles.item} ${styles["item-3"]}`}>
        <div className={styles.serviceTitle}>Сервис</div>
        <div className={styles.serviceContent}>
          Гарантия, возврат, обмен и ремонт
        </div>
      </NavLink>
    </CarouselFeaturesSliders>
  );
};

export default CarouselFeatures;
