import React from "react";

import SideBar from "../Components/sideBar/SideBar";

import styles from "../Components/styles/mainPage.module.css";

import CarouselFeatures from "../utils/Carousel/CarouselFeatures";
import CarouselBrands from "../utils/Carousel/CarouselBrands";

import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <SideBar />
      <div className={styles.filedForCard}>
        <div className={styles.personalCabinet}>
          <div className={styles.personalCabinetTitle}>Личный кабинет</div>
          <div className={styles.personalCabinetContent}>
            Получайте бонусы, отслеживайте заказы и делитесь мнением
          </div>
          <button className={styles.logIn}>Войти</button>
          <button className={styles.myOrders}>Мои заказы</button>
        </div>
        <div className={styles.carousels}>
          <CarouselFeatures />
        </div>
        <NavLink to="/comparison" className={styles.comparison}>
          <div className={styles.comparisonTitle}>Сравнение</div>
        </NavLink>
      </div>
      <div className={styles.cardProducts}>
        <NavLink to="/item1" className={styles.item}>
          <div className={styles.cardProductsImage}></div>
          <div className={styles.description}>
            <div className={styles.descriptionItem}>
              <NavLink>Снегоуборщики электрические</NavLink>
            </div>
            <div className={styles.descriptionItem}>
              <NavLink>Снегоуборщики аккумуляторные</NavLink>
            </div>
            <div className={styles.descriptionItem}>
              <NavLink>Снегоуборщики бензиновые</NavLink>
            </div>
          </div>
        </NavLink>
        <NavLink to="/item1" className={styles.item}>
          <div className={styles.cardProductsImage2}></div>
          <div className={styles.description}>
            <div className={styles.descriptionItem}>
              <NavLink>Снегоуборщики электрические</NavLink>
            </div>
            <div className={styles.descriptionItem}>
              <NavLink>Снегоуборщики аккумуляторные</NavLink>
            </div>
            <div className={styles.descriptionItem}>
              <NavLink>Снегоуборщики бензиновые</NavLink>
            </div>
          </div>
        </NavLink>
        <NavLink to="/item1" className={styles.item}>
          <div className={styles.cardProductsImage3}></div>
          <div className={styles.description}>
            <div className={styles.descriptionItem}>
              <NavLink>Кофемашины автоматические</NavLink>
            </div>
            <div className={styles.descriptionItem}>
              <NavLink>Кофемашины капсульные</NavLink>
            </div>
            <div className={styles.descriptionItem}>
              <NavLink>Электрочайники</NavLink>
            </div>
          </div>
        </NavLink>
      </div>
      <CarouselBrands/>
    </div>
  );
};

export default MainPage;
